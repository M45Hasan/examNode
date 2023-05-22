const nodemailer = require("nodemailer");

async function emailV(email,code){
    let transporter = nodemailer.createTransport({
        service: "gmail",
       
        auth: {
          user: "mmhasan045@gmail.com", // generated ethereal user
          pass: "wbjevrizghcecgrh", // generated ethereal password
        },
      });
      let info = await transporter.sendMail({
        from: 'MERN BD', // sender address
        to: email, // list of receivers
        subject: "Verification", // Subject line
        text: "Click Here", // plain text body
        html: `<button>${code}</button>`, // html body
      });

}

module.exports=emailV;