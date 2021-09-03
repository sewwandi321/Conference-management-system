//const router = express.Router();
const Paper = require('../models/Paper');
const shortid = require('shortid');
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


exports.createpaper = (req, res) => {

    console.log('calling create paper');

    // res.status(200).json({file: req.files , body:req.body});
    const {
        title, description, email,createBy
    } = req.body;

    let researchpaper = [];

    console.log(req.body);
    console.log(req.user._id);

    if (req.files.length > 0) {
        researchpaper = req.files.map(file => {
            return { fil: file.filename }
        });
    }

    //res.status(200).json({file: req.files , body:req.body});
    const paper = new Paper({
        title,
        description,
        email,
        status : 'pending',
        researchpaper,
        createBy: req.user._id
        
});



    // console.log(paper);
    console.log('paper'+paper);
    paper.save(((error, paper) => {
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

    const { paperid } = req.params;
    console.log("paper id", paperid)
    if (paperid) {
        Paper.findOne({ _id: paperid })
            .exec((error, paper) => {
                console.log('error');
                if (error)
                    return res.status(400).json({ error });
                console.log(error)
                if (paper) {
                    res.status(200).json({ paper });
                    console.log(paper);
                }
            });

    } else {
        return res.status(400).json({ error: 'params required' });
    }
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Paper.find(condition)
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

  
exports.approvefindAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Paper.find(condition)
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
  
exports.approvepaper= (req,res)=>
{
    console.log(req.params._id)
    //console.log("paper id", paperid)
    console.log("dewww  :"+req.body.status);
    console.log("dewww  :"+req.header.email);

    Paper.findByIdAndUpdate(
        req.params._id,
        {status:'approved'},
        {new:true}
    ).catch((err)=>{
        console.log(err);
    })
    Paper.findById(req.params._id)
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
                    subject: "Your reseachpaper approved", // Subject line
                    text: "", // plain text body
                    html: ` 
                          <h3>This is an automatically generated email, please do not reply </h3>
                          <li>Title: ${data.title}</li>
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
exports.rejectpaper= (req,res)=>
{
    console.log(req.params._id)
    console.log("dewww  :"+req.body.status);
    console.log("dewww  :"+req.header.email);

    Paper.findByIdAndUpdate(
        req.params._id,
        {status:'rejected'},
        {new:true}
    ).catch((err)=>{
        console.log(err);
    })
    Paper.findById(req.params._id)
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
                    subject: "Your reseachpaper rejected", // Subject line
                    text: "", // plain text body
                    html: ` 
                          <h3>This is an automatically generated email, please do not reply</h3>
                          <li>Title :${data.title}</li>
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
 

 


