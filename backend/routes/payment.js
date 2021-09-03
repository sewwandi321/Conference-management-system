const router=require("express").Router();
const { requireSignin,attendeemiddleware } = require('../middleware/index')
const { payment } = require('../controller/payment');




router.post('/payment/create',requireSignin,attendeemiddleware,payment);
router.post('/payment/conference/create',requireSignin,attendeemiddleware,payment);




 module.exports = router;  