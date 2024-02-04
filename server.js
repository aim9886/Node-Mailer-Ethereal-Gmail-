const express = require('express');
const app = express();
const cors = require('cors');

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contactform.html')
})

app.post('/', (req, res) => {
    console.log(req.body);


    // gmail sender

    // everytime you have to run this program u have to create new password of ur google account the steps are given in nodemailer project juz go through it.

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aimanthkumar5@gmail.com',
            pass: 'shri pqjy atcu xjmr'
        }
    })

    const mailOptions = {
        from: 'aimanthkumar5@gmail.com', // sender address
        to: "hemu9448@gmail.com", // list of receivers
        subject: "Sending Email using Node.js ", // Subject line
        text: "This is the email sent for learning", // plain text body
        // html: "<b>Hello hk hemanth</b>", // html body
    }

    // if u uncomment the html text it will send the html content to ur gmail

    // Smtp ethereal email

    // const transporter = nodemailer.createTransport({ // if u use smtp u have to use transporter
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     // secure: true,
    //     auth: {
    //         user: 'dixie.tremblay51@ethereal.email',
    //         pass: 'YHMp9qR7wfb8V1NhMN'
    //     }
    // });

    // const mailOptions = {
    //     from: '"Hemanth Kumar 👻" <hemu9448@gmail.com>', // sender address
    //     to: "aimanth9886@gmail.com", // list of receivers
    //     subject: "Hello hemanth", // Subject line
    //     text: "Hello hk hemanth", // plain text body
    //     html: "<b>Hello hk hemanth</b>", // html body
    // }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// go to browser and fill the form in localhost:5000 it will show u success in console and then go to ethereal email and continue the process.

// go to browser and fill the form in localhost:5000 it will show u success in console and then go to ur gmail and continue the process.



// const nodemailer = require("nodemailer");

// const sendMail = async (req, res) => {
//     let testAccount = await nodemailer.createTestAccount();

//     // connect with the smtp
//     let transporter = await nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         auth: {
//             user: 'devonte8@ethereal.email',
//             pass: 'dF2jTDxWr1WvHKXFes',
//         },
//     });

//     let info = await transporter.sendMail({
//         from: '"Hemanth Kumar 👻" <hemu9448@gmail.com>', // sender address
//         to: "aimanth9886@gmail.com", // list of receivers
//         subject: "Hello hemanth", // Subject line
//         text: "Hello hk hemanth", // plain text body
//         html: "<b>Hello hk hemanth</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);

//     res.json(info);
// };


// module.exports = sendMail;