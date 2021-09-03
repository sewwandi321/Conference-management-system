const router=require("express").Router();
const {initialData}=require('../../controller/reviewer/initialData')


router.post("/initialdata",initialData);

module.exports=router; 