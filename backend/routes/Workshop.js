const router=require("express").Router();
const { createworkshops, findAll, findByid,findapproveAll,approveworkshop,rejectworkshop } = require('../controller/Workshop');
const { requireSignin,reviewermiddleware,workshoppresentermiddleware } = require('../middleware/index')
const multer = require('multer');


//  const shortid = require('shortid')
 const path = require('path');


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


const upload = multer({ storage })  

router.post('/workshop/create',requireSignin,workshoppresentermiddleware,upload.array('worshopproposol'),createworkshops);
router.get("/workshops",requireSignin,findAll);

router.get("/approveworkshops",requireSignin,reviewermiddleware,findapproveAll);
router.put("/approveworkshops/approve/:_id",approveworkshop);
router.put("/approveworkshops/reject/:_id",rejectworkshop);
 module.exports = router;  