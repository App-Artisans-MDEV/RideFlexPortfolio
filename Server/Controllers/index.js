"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMail = exports.DisplayTeamPage = exports.DisplayContactPage = exports.DisplayAppPage = exports.DisplayFeaturesPage = exports.DisplayHomePage = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
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
async function SendMail(req, res, next) {
    const { name, email, message } = req.body;
    console.log(req.body);
    const transporter = nodemailer_1.default.createTransport({
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
        to: "iyervivek1000@gmail.com",
        subject: "Inquiry Received",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
    }
    catch (error) {
        console.error("Error sending email:", error);
    }
    res.send({ "success": true });
}
exports.SendMail = SendMail;
//# sourceMappingURL=index.js.map