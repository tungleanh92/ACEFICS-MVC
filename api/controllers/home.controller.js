var Home = require('../../models/product.modal')

module.exports.home = async function (req, res, next) {
    var home = await Home.find();
    res.json(home)
}
