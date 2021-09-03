const router=require("express").Router();
const { requireSignin,reviewermiddleware,researchermiddleware } = require('../middleware/index')
const { createpaper, findAll, findByid,approvepaper,approvefindAll,rejectpaper } = require('../controller/paper');
const {notification} = require('../controller/notification')
const multer = require('multer');
const nodemailer = require("nodemailer");


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

//requireSignin,reviewermiddleware,
const upload = multer({ storage })  

router.post('/paper/create',requireSignin,researchermiddleware,upload.array('researchpaper'),createpaper);
router.get("/allpper/",requireSignin,findAll);
//router.get('/papers/:paperid',requireSignin,reviewermiddleware,findByid);

router.get("/approvep/",requireSignin,reviewermiddleware,approvefindAll);
router.put('/paper/approveper/:_id',approvepaper);
router.put('/paper/rejectpaper/:_id',rejectpaper);
router.post("/sendEmail",notification)

//,requireSignin,reviewermiddleware

 module.exports = router;  