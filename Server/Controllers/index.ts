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