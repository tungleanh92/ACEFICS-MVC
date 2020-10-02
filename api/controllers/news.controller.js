const News = require('../../models/news.model')

module.exports.news = async function (req, res, next) {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let sectionReq = await News.findOne({ _id: req.body.id });
            if (sectionReq) {
                await Projects.findOneAndUpdate(
                    { _id: req.body.id },
                    {
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
                var newImage = new News(
                    {
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