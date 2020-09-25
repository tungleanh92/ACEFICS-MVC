var Home = require('../models/home.modal')

module.exports.home = async function (req, res, next) {
    var home = await Home.find();
    var sectionBanner = await Home.findOne({ section: 'banner' }).exec();
    var sectionAbout = await Home.findOne({ section: 'about' }).exec();
    var sectionActivity = await Home.findOne({ section: 'activity' }).exec();
    var sectionProject = await Home.findOne({ section: 'project' }).exec();
    var sectionRecruit = await Home.findOne({ section: 'recruit' }).exec();
    var sectionNews = await Home.findOne({ section: 'news' }).exec();
    var sectionPartner = await Home.findOne({ section: 'partner' }).exec();
    res.render("index", {
        sectionBanner: sectionBanner,
        sectionAbout: sectionAbout,
        sectionActivity: sectionActivity,
        sectionProject: sectionProject,
        sectionRecruit: sectionRecruit,
        sectionNews: sectionNews,
        sectionPartner: sectionPartner
    });
}