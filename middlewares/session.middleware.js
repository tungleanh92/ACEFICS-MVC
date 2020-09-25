// const Session = require('../models/session.modal')
// var mongoose = require('mongoose');
// module.exports.sessionId = async function (req, res, next) {
//     if (!req.signedCookies.sessionId) {
//         var newId = new mongoose.mongo.ObjectId();
//         res.cookie('sessionId', newId, {
//             signed: true
//         })
//         // await Session.insertMany({ _id: newId, cart: [], total: 0 });
//     }

//     next()
// }