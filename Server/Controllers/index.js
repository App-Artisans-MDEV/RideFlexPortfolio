"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayTeamPage = exports.DisplayContactPage = exports.DisplayProjectsPage = exports.DisplayFeaturesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index');
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index');
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayFeaturesPage(req, res, next) {
    res.render('features');
}
exports.DisplayFeaturesPage = DisplayFeaturesPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index');
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayContactPage(req, res, next) {
    res.render('contact');
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayTeamPage(req, res, next) {
    res.render('team');
}
exports.DisplayTeamPage = DisplayTeamPage;
//# sourceMappingURL=index.js.map