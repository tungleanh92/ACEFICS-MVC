const Projects = require('../../models/projects.model')

module.exports.projects = async function (req, res, next) {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let sectionReq = await Projects.findOne({ _id: req.body.id });
            if (sectionReq) {
                await Projects.findOneAndUpdate(
                    { _id: req.body.id },
                    {
                        name: req.body.name,
                        section: req.body.section,
                        title: req.body.title,
                        desc: req.body.desc,
                        image: avatar.name
                    })
            } else {
                let avatar = req.files.image;
                avatar.mv('./uploads/' + avatar.name);
                res.send({
                    status: true,
                    message: 'File is uploaded',
                });
                var newImage = new Projects(
                    {
                        name: req.body.name,
                        section: req.body.section,
                        title: req.body.title,
                        desc: req.body.desc,
                        image: avatar.name
                    })
                return newImage.save()
            }
        }
    } catch (err) {
        res.status(500).send(err);
    }
}