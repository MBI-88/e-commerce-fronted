import nodemailer from 'nodemailer';
import { MailData } from '../interfaces/mail';


export async function sendMail({toEmail,code}:MailData) {


 

  //transporter
  var transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    // secure:false,  //arreglar esto mas tarde a true
    // port: 465,
    port: 587,
    auth: {
      user:"dtodo5720@gmail.com" ,       //process.env.NEXT_PUBLIC_USER_GMAIL,   
      pass:'mvsq jyrv edus qbue'           //process.env.NEXT_PUBLIC_PASSWORD_GMAIL   
    },
  });


  //ooptions email
  var mailOptions = {
    from: `D'Todo <dtodo5720@gmail.com>`,
    to:toEmail, //toEmail,
    subject:"Codigo de inicio d sesion",    //Asunto de correo
    text: 'Bienvenido',     //html body
    html:`<h3>Hola Este es tu codigo de inicio de sesion  ${code}. Expira en 10 minutos</h3>`
  };




  //envio
  return await  transporter.sendMail(mailOptions)





 
 
}