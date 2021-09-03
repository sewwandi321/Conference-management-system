const router=require("express").Router();
const {signup, signin,signout}=require('../controller/user-auth')
const { validateSigninRequest,validateSignupRequest, isRequestValidated } = require('../validations/auth')
const {validationResult,check}=require('express-validator');




router.post('/signup',validateSigninRequest, isRequestValidated,signup)
router.post("/signin",validateSignupRequest,isRequestValidated,signin);
router.post("/signout",signout);


module.exports=router;