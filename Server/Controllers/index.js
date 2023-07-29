"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMail = exports.DisplayTeamPage = exports.DisplayContactPage = exports.DisplayAppPage = exports.DisplayFeaturesPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayFeaturesPage(req, res, next) {
    res.render('features', { page: 'features' });
}
exports.DisplayFeaturesPage = DisplayFeaturesPage;
function DisplayAppPage(req, res, next) {
    res.render('app', { page: 'app' });
}
exports.DisplayAppPage = DisplayAppPage;
function DisplayContactPage(req, res, next) {
    res.render('contact', { page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayTeamPage(req, res, next) {
    res.render('team', { page: 'team' });
}
exports.DisplayTeamPage = DisplayTeamPage;
function SendMail(req, res, next) {
    const { name, email, message } = req.body;
    console.log(req.body);
    const formData = require('form-data');
    const Mailgun = require('mailgun.js');
    const mailgun = new Mailgun(formData);
    console.log("here");
    const mg = mailgun.client({
        username: 'api',
        key: '73f745ed-965dfdad'
    });
    const domain = 'sandboxcdeb9be739cc42f1a367966ef9ee4187.mailgun.org';
    mg.messages
        .create(domain, {
        from: 'Mailgun Sandbox <postmaster@sandboxcdeb9be739cc42f1a367966ef9ee4187.mailgun.org>',
        to: ['rahilkhatri4@gmail.com'],
        subject: 'Hello',
        text: 'You have got a message from ' + email + '. The message is ' + message,
    })
        .then((msg) => {
        console.log(msg);
        res.send({ "success": true });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).send({ "success": false, "error": "Failed to send email." });
    });
}
exports.SendMail = SendMail;
//# sourceMappingURL=index.js.map