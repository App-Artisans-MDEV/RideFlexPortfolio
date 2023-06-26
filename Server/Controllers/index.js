"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayTeamPage = exports.DisplayContactPage = exports.DisplayAppPage = exports.DisplayFeaturesPage = exports.DisplayHomePage = void 0;
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
//# sourceMappingURL=index.js.map