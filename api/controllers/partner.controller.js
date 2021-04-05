const Partner = require('../../models/partner.model')

module.exports.partners = async function (req, res, next) {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let sectionReq = await Partner.findOne({ _id: req.body.id });
            if (sectionReq) {
                await Partner.findOneAndUpdate(
                    { _id: req.body.id },
                    {
                        image: avatar.name
                    })
            } else {
                let avatar = req.files.image;
                avatar.mv('./uploads/' + avatar.name);
                res.send({
                    status: true,
                    message: 'File is uploaded',
                });
                var newImage = new Partner(
                    {
                        image: avatar.name
                    })
                return newImage.save()
            }
        }
    } catch (err) {
        res.status(500).send(err);
    }
}