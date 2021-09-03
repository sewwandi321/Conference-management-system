const router = require("express").Router();
const nodemailer = require("nodemailer");
const Post = require("../models/Conference");
const Conference = require('../models/Conference');

//CREATE CONFERENCE

exports.addConference = (req, res) => {



  // res.status(200).json({file: req.files , body:req.body});
  const {
    title, date, conductor,email,status,description,editorname,venue,time
  } = req.body;

  
  let photo = [];

  console.log("ff"+req.body);

  if (req.files.length > 0) {
    photo = req.files.map(file => {
          return { fil: file.filename }
      });
  }

  //res.status(200).json({file: req.files , body:req.body});
  const conference = new Conference({
      title,
      date,
      conductor,
      description,
      editorname,
      status,
      email,
      photo,
      venue,
      time,
      createBy: req.user._id



  });
conference.save(((error, conference) => {
      if (error) {
          console.log(error);
          return res.status(400).json({ error });
      }
      if (conference) {
          res.status(201).json({ conference });
      }
  }));
};

exports.getConferenceById =async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getAllConferences = (req, res) => {
  const name = req.query.name;

  console.log('name'+ name);
  var condition = name ? { username: { $regex: new RegExp(name), $options: "i" } } : {};

  Conference.find(condition)
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


exports.updateconference= (req,res)=>
{

    const {
        title, date, conductor,email,status,description,editorname,venue,time
      } = req.body;
       console.log(title);
       console.log(email);
    // //   let photo = [];
    //   console.log("req.body.email");
    //   console.log(req.body.email);
//   console.log(""+req.files.length);

//   if (req.files.length > 0) {
//     photo = req.files.map(file => {
//           return { fil: file.filename }
//       });
//   }

const conference = new Conference({
    title,
    date,
    conductor,
    description,
    editorname,
    status,
    email,
   // photo,
    venue,
    time,
    //createBy: req.user._id



});

console.log('conference'+conference)
console.log("paper id", req.params._id)

    Conference.findByIdAndUpdate({_id: req.params._id}, { $set: { title: title , email:email ,conductor:conductor,time:time,description:description, venue: venue}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    });

}


exports.approveconference= (req,res)=>
{
    console.log(req.params._id)
    //console.log("paper id", paperid)
    console.log("dewww  :"+req.body.status);
    console.log("dewww  :"+req.header.email);

    Conference.findByIdAndUpdate(
        req.params._id,
        {status:'approved'},
        {new:true}
    ).catch((err)=>{
        console.log(err);
    })
    Conference.findById(req.params._id)
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
                    subject: "Your conference approved", // Subject line
                    text: "", // plain text body
                    html: ` 
                          <h3> This is an automatically generated email, please do not reply </h3>
                          <li>Title: ${data.title}</li>
                          <li>status: ${data.status}</li>
                          <li>date: ${data.date}</li>
                          <h3>Message</h3>
                          <p>This is </p>`,
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
exports.rejectconference= (req,res)=>
{
    console.log(req.params._id)
    console.log("dewww  :"+req.body.status);
    console.log("dewww  :"+req.header.email);

    Conference.findByIdAndUpdate(
        req.params._id,
        {status:'rejected'},
        {new:true}
    ).catch((err)=>{
        console.log(err);
    })
    Conference.findById(req.params._id)
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
                          <h3>This is an automatically generated email, please do not reply </h3>
                          <li>Title ${data.title}</li>
                          <li>status: ${data.status}</li>
                          <li>date: ${data.date}</li>
                          
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

