import express from 'express';
import nodemailer from "nodemailer";
//Controller logic to display your home page
export function DisplayHomePage(req: express.Request , res: express.Response , next: express.NextFunction): void
{
    res.render('index' , {page : 'home'});
}

//Controller logic to display your services page
export function DisplayFeaturesPage(req: express.Request , res: express.Response , next: express.NextFunction): void
{
    res.render('features' , {page : 'features'});
}

//Controller logic to display your projects page
export function DisplayAppPage(req: express.Request , res: express.Response , next: express.NextFunction): void
{
    res.render('app' , {page : 'app'});
}

//Controller logic to display your contact page
export function DisplayContactPage(req: express.Request , res: express.Response , next: express.NextFunction): void
{
    res.render('contact' , {page : 'contact'});
}

//Controller logic to display your team page
export function DisplayTeamPage(req: express.Request , res: express.Response , next: express.NextFunction): void
{
    res.render('team' , {page : 'team'});
}

export async function SendMail(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { name, email, message } = req.body;
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: "mail.sahiljani.dev",
        port: 465,
        secure: true, 
        auth: {
          user: "info@sahiljani.dev", 
          pass: "!kqdfHh0=ntD",       
        },
      });
      
      const mailOptions = {
        from: "info@sahiljani.dev",
        to: "iyervivek1000@gmail.com", // Replace with the recipient's email address
        subject: "Inquiry Received",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    res.send({ "success": true });
}
