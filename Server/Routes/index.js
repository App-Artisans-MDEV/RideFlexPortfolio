"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const Controllers_1 = require("../Controllers");
router.get('/', (req, res, next) => (0, Controllers_1.DisplayHomePage)(req, res, next));
router.get('/home', (req, res, next) => (0, Controllers_1.DisplayHomePage)(req, res, next));
router.get('/features', (req, res, next) => (0, Controllers_1.DisplayFeaturesPage)(req, res, next));
router.get('/app', (req, res, next) => (0, Controllers_1.DisplayAppPage)(req, res, next));
router.get('/contact', (req, res, next) => (0, Controllers_1.DisplayContactPage)(req, res, next));
router.get('/team', (req, res, next) => (0, Controllers_1.DisplayTeamPage)(req, res, next));
router.post("/sendmail", (req, res, next) => { (0, Controllers_1.SendMail)(req, res, next); });
exports.default = router;
//# sourceMappingURL=index.js.map