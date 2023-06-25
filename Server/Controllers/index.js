"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayTeamPage = exports.DisplayContactPage = exports.DisplayAppPage = exports.DisplayFeaturesPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index');
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayFeaturesPage(req, res, next) {
    res.render('features');
}
exports.DisplayFeaturesPage = DisplayFeaturesPage;
function DisplayAppPage(req, res, next) {
    res.render('app');
}
exports.DisplayAppPage = DisplayAppPage;
function DisplayContactPage(req, res, next) {
    res.render('contact');
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayTeamPage(req, res, next) {
    res.render('team');
}
exports.DisplayTeamPage = DisplayTeamPage;
//# sourceMappingURL=index.js.map