'use strict'
module.exports = function (app) {
    var theatreList = require('../controllers/theatreListController')
    // var cors = require('cors');
    // app.use(cors())
    app.route('/Theatre')
        .post(theatreList.createATheatre)

    app.route('/Theatre/:theatreName')
        .get(theatreList.listAllTheatre)

    app.route('/Theatre/theatreupdate/:theatreId')
        .post(theatreList.updateATheatre)
}