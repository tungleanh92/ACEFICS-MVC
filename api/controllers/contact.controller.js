const Contact = require('../../models/contact.model')

module.exports.contact = async function (req, res, next) {
    // try {
    //     let existedEmail = await Contact.findOne({ email: req.body.email });
    //     let existedPhone = await Contact.findOne({ phone: req.body.phone });
    //     if (existedEmail || existedPhone) {
    //         res.send("Existed email or phone");
    //     } else {
    //         var newContact = new Contact(
    //             {
    //                 name: req.body.name,
    //                 organization: req.body.organization,
    //                 email: req.body.email,
    //                 phone: req.body.phone,
    //                 content: req.body.content
    //             })
    //         return newContact.save().then(function () { res.send("Succ!") })
    //     }
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).send(err);
    // }
}