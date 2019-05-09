'use strict'
module.exports = function (app) {
    var loginList = require('../controllers/loginListController')
    // var cors = require('cors');
    // app.use(cors())
    app.route('/checklogin')
        .post(loginList.checkMovie)
    app.route('/signup')
        .post(loginList.createAMovie)
    app.route('/checksignup')
        .post(loginList.listAllMovie)
}