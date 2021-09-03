//const router = express.Router();
const shortid = require('shortid');
const Payment = require('../models/payment');
const nodemailer = require("nodemailer");


exports.payment = (req, res) => {

    const {
        name, email, date,cardnumber,cvc,amount
    } = req.body;

    const payment = new Payment({
        name,
        email,
        date,
        cardnumber,
        cvc,
        amount
        // createBy: req.user._id



    });
console.log("ttt"+payment)

 payment.save(((error, payment) => {
        // if (error) {
        //     console.log(error);
        //     return res.status(400).json({ error });
        // }
        // console.log(payment.email)
        // console.log("pay"+payment)
        // if (payment) {
            //res.status(201).json({ payment });
            // console.log(payment.email);
            // console.log("dd"+email);
            const receiverEmail = req.body.email; // get the reciver email address from body of the  request
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
                    subject: "Your Payment approved", // Subject line
                    text: "", // plain text body
                    html: ` 
                          <h3>This is an automatically generated email, please do not reply</h3>
                          <li>Amount: ${data.amount}</li>
                          <li>name: ${data.name}</li>
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
      
        // }
    }));
    //hhh
};
// exports.sendnotification= (req,res)=>
// {
//     //console.log(req.params._id)
//     //console.log("paper id", paperid)
    
//     console.log("dewww  :"+req.header.email);

   
    

//     console.log("dewww  :"+req.body.status);
 
// }
 





