import express from 'express';
let router = express.Router();

//import the index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage, DisplayTeamPage } from '../Controllers';

/* GET  Default Route */
router.get('/', (req, res, next) => DisplayHomePage(req , res , next) );

/* GET  Home Page */
router.get('/home', (req, res, next) => DisplayHomePage(req , res , next) );

/* GET  About Page */
router.get('/about', (req, res, next) => DisplayAboutPage(req , res , next) );

/* GET  Services Page */
router.get('/services', (req, res, next) => DisplayServicesPage(req , res , next) );

/* GET  Projects Page */
router.get('/projects', (req, res, next) => DisplayProjectsPage(req , res , next) );

/* GET  Contact Page */
router.get('/contact', (req, res, next) => DisplayContactPage(req , res , next) );

/* GET Team Page */
router.get('/team', (req, res, next) => DisplayTeamPage(req , res , next) );

export default router;
