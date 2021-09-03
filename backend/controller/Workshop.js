//const router = express.Router();
const Workshop = require('../models/Workshops');
const shortid = require('shortid');
const nodemailer = require("nodemailer");

exports.createworkshops = (req, res) => {

    console.log('workshpos called');

    // res.status(200).json({file: req.files , body:req.body});
    const {
        date, email,topic,description,status
    } = req.body;

    let worshopproposol = [];

    console.log(req.body);

    if (req.files.length > 0) {
        worshopproposol = req.files.map(file => {
            return { fil: file.filename }
        });
    }

    //res.status(200).json({file: req.files , body:req.body});
    const workshop = new Workshop({
        date,
        email,
        topic,
        description,
        status,
        worshopproposol,
        createBy: req.user._id



    });



    console.log('workshop object'+workshop);

    workshop.save(((error, paper) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ error });
        }
        if (paper) {
            res.status(201).json({ paper });
        }
    }));
    //hhh
};
exports.findByid = (req, res) => {

    // console.log('hey')
    //res.status(200).json({file: req.files , body:req.body});
    const { workshopid } = req.params;
    console.log("workshop id", workshopid)
    if (workshopid) {
        Workshop.findOne({ _id: workshopid })
            .exec((error, workshop) => {
                console.log('error');
                if (error)
                    return res.status(400).json({ error });
                console.log(error)
                if (workshop) {
                    res.status(200).json({ workshop });
                    console.log(workshop);
                }
            });

    } else {
        return res.status(400).json({ error: 'params required' });
    }
};
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Workshop.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  exports.findapproveAll
  = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Workshop.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  exports.approveworkshop= (req,res)=>
{
    console.log(req.params._id)
   

    Workshop.findByIdAndUpdate(
        req.params._id,
        {status:'approved'},
        {new:true}
    ).catch((err)=>{
        console.log(err);
    })
    Workshop.findById(req.params._id)
        .then(data => {
            console.log(data.email);
            const receiverEmail = data.email; // get the reciver email address from body of the  request
	        const senderMail = "edexonlineconferencemanagement@gmail.com"; // set emailmaddress of sender
	        const password = "asdqwe@123"; // set password of sender

            try {
                /*
               create reusable transporter object using the default SMTP transport
              */
                let transporter = nodemailer.createTransport({
                    service: "gmail", // use gmail as the email service
                    port: 25, // port number
                    secure: false, // true for 465, false for other ports
                    auth: {
                        // autnetication details
                        user: senderMail,
                        pass: password,
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                });
        
                let HelperOptions = {
                    from: senderMail, // sender address
                    to: receiverEmail, // list of receivers
                    subject: "Your workshop approved", // Subject line
                    text: "", // plain text body
                    html: ` 
                          <h3>This is an automatically generated email, please do not reply</h3>
                          <li>Topic: ${data.topic}</li>
                          <li>description: ${data.description}</li>
                          <li>status: ${data.status}</li>
                          <h3>Message</h3>
                          <p>${req.body.message}</p>`,
                };
        
                // HTML version of the message
        
                transporter.sendMail(HelperOptions, (error, info) => {
                    // send mail with defined transport object
                    if (error) {
                        return console.log(error);
                    }
        
                    console.log("The message was sent!");
        
                    console.log(info);
        
                    res.json(info); // send the json response
                });
            } catch (e) {
                console.log(e);
            }
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });

    console.log("dewww  :"+req.body.status);
 
}

exports.rejectworkshop= (req,res)=>
{
    console.log(req.params._id)
   
    console.log("dewww  :"+req.body.status);
    console.log("dewww  :"+req.header.email);

    Workshop.findByIdAndUpdate(
        req.params._id,
        {status:'rejected'},
        {new:true}
    ).catch((err)=>{
        console.log(err);
    })
    Workshop.findById(req.params._id)
        .then(data => {
            console.log(data.email);
            const receiverEmail = data.email; // get the reciver email address from body of the  request
	        const senderMail = "edexonlineconferencemanagement@gmail.com"; // set emailmaddress of sender
	        const password = "asdqwe@123"; // set password of sender

            try {
                /*
               create reusable transporter object using the default SMTP transport
              */
                let transporter = nodemailer.createTransport({
                    service: "gmail", // use gmail as the email service
                    port: 25, // port number
                    secure: false, // true for 465, false for other ports
                    auth: {
                        // autnetication details
                        user: senderMail,
                        pass: password,
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                });
        
                let HelperOptions = {
                    from: senderMail, // sender address
                    to: receiverEmail, // list of receivers
                    subject: "Your workshop rejected", // Subject line
                    text: "", // plain text body
                    html: ` 
                          <h3>This is an automatically generated email, please do not reply</h3>
                          <li>Topic ${data.topic}</li>
                          <li>Description: ${data.description}</li>
                          <li>Status: ${data.status}</li>
                          
                          <h3>Message</h3>
                          <p>${req.body.message}</p>`,
                };
        
                // HTML version of the message
        
                transporter.sendMail(HelperOptions, (error, info) => {
                    // send mail with defined transport object
                    if (error) {
                        return console.log(error);
                    }
        
                    console.log("The message was sent!");
        
                    console.log(info);
        
                    res.json(info); // send the json response
                });
            } catch (e) {
                console.log(e);
            }
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });

    console.log("dewww  :"+req.body.status);
 
}
 




  