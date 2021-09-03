
const jwt =require('jsonwebtoken');

exports.requireSignin=(req,res,next)=>
{
    //validation
    //check header regading validationa method and
    //forward it to nxt user
    if(req.headers.authorization)
    {
        console.log("req.user.role");
        const token=req.headers.authorization.split(" ")[1];
        const user=jwt.verify(token,process.env.JWT_SCRET);
        req.user=user;
        console.log(token);
        console.log(req.user.role);
        
        //jwt.decode()
    }else{
        return res.status(400).json({message:'Authorization requied'})
    }
    next();
}
exports.adminmiddleware = (req, res, next) => {
    
    console.log(req.user.role);
    if(req.user.role !=='admin')
    {
        return res.status(400).json({message:'user access denaied'})
    }
    next();
   
}
exports.editormiddleware = (req, res, next) => {
    
    console.log(req.user.role);
    if(req.user.role !=='editor')
    {
        return res.status(400).json({message:'user access denaied'})
    }
    next();
   
}
exports.researchermiddleware = (req, res, next) => {
    console.log(req.body.name);
    console.log(req.user.role);
    //console.log(req.user.name);
   if(req.user.role !=='researcher')
    {
        return res.status(400).json({message:'seller access denaied'})
    }
    next();
   
}

exports.workshoppresentermiddleware = (req, res, next) => {
    console.log(req.body.name);
    console.log(req.user.role);
    //console.log(req.user.name);
   if(req.user.role !=='workshop presenter')
    {
        return res.status(400).json({message:'seller access denaied'})
    }
    next();
   
}
exports.attendeemiddleware = (req, res, next) => {
    console.log(req.body.name);
    console.log(req.user.role);
    //console.log(req.user.name);
   if(req.user.role !=='attendee')
    {
        return res.status(400).json({message:'seller access denaied'})
    }
    next();
   
}

exports.reviewermiddleware = (req, res, next) => {
    console.log(req.body.name);
    console.log(req.user.role);
    //console.log(req.user.name);
   if(req.user.role !=='reviewer')
    {
        return res.status(400).json({message:'seller access denaied'})
    }
    next();
   
}