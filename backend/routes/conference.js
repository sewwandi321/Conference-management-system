const router=require("express").Router();
const { requireSignin,adminmiddleware,editormiddleware } = require('../middleware/index')
const multer = require('multer');
const path = require('path');
const { addConference,
    approveconference,
    rejectconference,
    updateconference,
    getAllConferences } = require('../controller/conference');

const storage = multer.diskStorage({
    destination:function (req,file,cb){
     //     cb(null,path.join(path.dirname(__dirname),'uploads' ))
     cb(null,'./uploads/')
        
    },
    filename:function (req,file ,cb){
        //  cb(null, shortid.generate() + '-' + file.originalname)
     
        cb(null, file.originalname)
    }
})


const upload = multer({ storage })  ;

        // router.post('/paper/create',upload.array('researchpaper'),createpaper);

router.post('/addconference',requireSignin,editormiddleware,upload.array('photo'),addConference);
router.get('/approve/getconference',getAllConferences);
router.get('/getconference',getAllConferences);
router.put('/updateconference/:_id',updateconference);

router.get('/getapproveconference',requireSignin,adminmiddleware,getAllConferences);
router.put('/approveconference/:_id',approveconference);
router.put('/rejectconference/:_id',rejectconference);


 module.exports = router;  