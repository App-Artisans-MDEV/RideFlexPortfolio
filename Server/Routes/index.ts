import express from 'express';
let router = express.Router();

//import the index controller
import { DisplayContactPage, DisplayHomePage, DisplayAppPage, DisplayFeaturesPage, DisplayTeamPage } from '../Controllers';

/* GET  Default Route */
router.get('/', (req, res, next) => DisplayHomePage(req , res , next) );

/* GET  Home Page */
router.get('/home', (req, res, next) => DisplayHomePage(req , res , next) );

/* GET  Services Page */
router.get('/features', (req, res, next) => DisplayFeaturesPage(req , res , next) );

/* GET  Projects Page */
router.get('/app', (req, res, next) => DisplayAppPage(req , res , next) );

/* GET  Contact Page */
router.get('/contact', (req, res, next) => DisplayContactPage(req , res , next) );

/* GET Team Page */
router.get('/team', (req, res, next) => DisplayTeamPage(req , res , next) );

export default router;
