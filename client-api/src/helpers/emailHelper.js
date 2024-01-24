const nodemailer = require("nodemailer");

//For Test
//Email address of the company to send pin codes.
// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'stuart.schneider39@ethereal.email',
//         pass: 'tPYh56J3Yk3D6MtPCh'
//     }
// });



//Actual Email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jeff4@ethereal.email",
        pass:"rUwc7BjXxdVT47yX6Z"
    }
})


const send = (info) => {
    return new Promise(async (resolve, reject) => {
    try {
        let result = await transporter.sendMail(info);
        console.log("Message sent: %s", result.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
        resolve(result);
    } catch (error) {
        console.log(error);
    }
    });
};




const emailProcccess = ({ email, pin, type, verificationLink = "" }) => {
    let info = "";
    switch (type) {
    case "request-new-password":
        info = {
          from: '"Ticket CRM Company" <nodejsdev007@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Password rest Pin", // Subject line
        text:
            "Here is your password rest pin" +
            pin +
            " This pin will expires in 1day", // plain text body
        html: `<b>Hello </b>
        Here is your pin 
        <b>${pin} </b>
        This pin will expires in 1day
        <p></p>`, // html body
        };

        send(info);
        break;

    case "update-password-success":
        info = {
          from: '"Ticket CRM Company" <nodejsdev007@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Password updated", // Subject line
          text: "Your new password has been update", // plain text body
        html: `<b>Hello </b>
        
        <p>Your new password has been update</p>`, // html body
        };

        send(info);
        break;

    case "new-user-confirmation-required":
        info = {
        from: '"Ticket CRM Company" <nodejsdev007@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Please verify your new user", // Subject line
        text:
            "Please follow the link to verify your account before you can login", // plain text body
        html: `<b>Hello </b>
        <p>Please follow the link to verify your account before you can login</p>
        <p>${verificationLink}</P>
          `, // html body
        };

        send(info);
        break;

    default:
        break;
    }
};





module.exports = { emailProcccess };

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//       user: '	jeff4@ethereal.email',
//       pass: '	rUwc7BjXxdVT47yX6Z'
//   }
// });

// const sendMail = async (mailOptions) => {
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(info);
//       }
//     });
//   });
// };

// const emailProcccess = async (email, pin) => {
//   const mailOptions = {
//     from: '"Blair Torphy👻" <blair.torphy14@ethereal.email>',
//     to: email,
//     subject: "Password Reset",
//     text: `Your password reset pin is: ${pin}. It will expire after 5 hours.`,
//     html: `<b>Your password reset pin is: ${pin}. It will expire after 5 hours.</b>`,
//   };

//   try {
//     const result = await sendMail(mailOptions);
//     console.log("Message sent: %s", result.messageId);
//     // You can handle success here
//   } catch (error) {
//     console.error("Error sending email:", error);
//     // You can handle errors here
//   }
// };

// module.exports = {
//   emailProcccess
// };
