const Activity = require('../../models/activity.model')

module.exports.activity = async function (req, res, next) {
    let sectionReq = await Activity.findOne({ _id: req.body.id });
    if (sectionReq) {
        await Activity.findOneAndUpdate(
            { _id: req.body.id },
            {
                section: req.body.section,
                content: req.body.content,
                title: req.body.title,
            })
    } else {
        var newActivity = new Activity(
            {
                section: req.body.section,
                content: req.body.content,
                title: req.body.title,
            })
        newActivity.save()
    }
    let updatedSection = await Activity.findOne({ section: req.body.section, });
    return res.json(updatedSection)
}