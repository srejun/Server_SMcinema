'use strict'
module.exports = function(app){
    var movieList = require('../controllers/movieListController')
    // var cors = require('cors');
    // app.use(cors())
    app.route('/Movie')
        .get(movieList.listAllMovie)
        .post(movieList.createAMovie)

    app.route('/Movie/:movieId')
        .get(movieList.readAMovie)
        // .delete(movieList.deleteAMovie)
        .post(movieList.updateAMovie)
}