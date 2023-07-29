import express from 'express';

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

export function SendMail(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const { name, email, message } = req.body;

    console.log(req.body);

    const formData = require('form-data');
    const Mailgun = require('mailgun.js');
    const mailgun = new Mailgun(formData);
    console.log("here");

    // Load Mailgun API key from your environment variables or replace <PRIVATE_API_KEY> with your actual API key
    const mg = mailgun.client({
        username: 'api',
        key: '73f745ed-965dfdad'
    });

    const domain = 'sandboxcdeb9be739cc42f1a367966ef9ee4187.mailgun.org'; // Replace with your Mailgun domain

    mg.messages
        .create(domain, {
            from: 'Mailgun Sandbox <postmaster@sandboxcdeb9be739cc42f1a367966ef9ee4187.mailgun.org>',
            to: ['rahilkhatri4@gmail.com'], // Replace with the recipient's email address
            subject: 'Hello',
            text: 'You have got a message from ' + email + '. The message is ' + message,
        })
        .then((msg: any) => {
            console.log(msg); // logs response data
            res.send({ "success": true }); // Send a response to the client indicating the email was sent successfully
        })
        .catch((err: any) => {
            console.error(err); // logs any error
            res.status(500).send({ "success": false, "error": "Failed to send email." }); // Send an error response to the client in case of failure
        });
}
