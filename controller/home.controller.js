const Hdct = require('../models/hd-ct.model')
const News = require('../models/news.model')
const Projects = require('../models/projects.model')
const Activity = require('../models/activity.model')
const Partners = require('../models/partner.model')

module.exports.home = async function (req, res, next) {
    const sectionBanner = await Hdct.findOne({ name: 'banner' }).exec();
    const sectionAbout = await Hdct.findOne({ name: 'aboutus' }).exec();
    const sectionActivity = await Hdct.findOne({ name: 'activity' }).exec();
    const sectionProject = await Hdct.findOne({ name: 'project' }).exec();
    const sectionRecruit = await Hdct.findOne({ name: 'recruitment' }).exec();
    const sectionNews = await Hdct.findOne({ name: 'news' }).exec();
    const sectionPartner = await Hdct.findOne({ name: 'partner' }).exec();

    const news = await News.find({ section: 'news' }).exec();
    const projects = await Projects.find({ section: 'projects' })
    const activity = await Activity.find({ section: 'activity' })
    const partners = await Partners.find();
    let filterdProjects = [[]];
    let k = 0
    for (let i = 0; i < projects.length; i++) {
        if (i == 0) {
            filterdProjects[k].push(projects[i])
        }
        else {
            if (projects[i].type === projects[i - 1].type) {
                filterdProjects[k].push(projects[i])
            }
            if (projects[i].type !== projects[i - 1].type) {
                filterdProjects.push([]);
                k++;
                filterdProjects[k].push(projects[i])
            }
        }
    }
    return res.render("index", {
        news: news,
        activity: activity,
        projects: filterdProjects,
        partners: partners,
        sectionBanner: sectionBanner,
        sectionAbout: sectionAbout,
        sectionActivity: sectionActivity,
        sectionProject: sectionProject,
        sectionRecruit: sectionRecruit,
        sectionNews: sectionNews,
        sectionPartner: sectionPartner
    });
}