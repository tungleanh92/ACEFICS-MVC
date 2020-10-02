const Hdct = require('../../models/hd-ct.model')

module.exports.hdct = async function (req, res, next) {
    let sectionReq = await Hdct.findOne({ _id: req.body.id });
    if (sectionReq) {
        await Hdct.findOneAndUpdate(
            { _id: req.body.id },
            {
                type: req.body.type,
                name: req.body.name,
                title: req.body.title,
                desc: req.body.desc,
            })
    } else {
        var newSection = new Hdct(
            {
                type: req.body.type,
                name: req.body.name,
                title: req.body.title,
                desc: req.body.desc,
            })
        newSection.save()
    }
    let updatedSection = await Hdct.findOne({ section: req.body.section, });
    return res.json(updatedSection)
}
