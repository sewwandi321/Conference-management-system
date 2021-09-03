 const router=require("express").Router();
const {signup, signin,signout}=require('../../controller/reviewer/reviewer-auth')
const { validateSigninRequest,validateSignupRequest, isRequestValidated } = require('../../validations/auth')
const {validationResult,check}=require('express-validator');
const {requireSignin}=require('../../middleware/index')
router.post("/reviewer/signin",validateSignupRequest,isRequestValidated,signin);

router.post("/reviewer/signup",validateSigninRequest, isRequestValidated,signup);
router.post("/reviewer/signout", signout);
// router.post('/admin/profile',requireSignin,(req,res)=>
// {
//     res.status(200).json({user:'profile '})
// });

module.exports=router;