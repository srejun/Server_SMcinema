'use strict'
module.exports = function(app){
    var movieList = require('../controllers/movieListController')
    // var cors = require('cors');
    // app.use(cors())

    app.route('/getMovies')
        .get(movieList.listAllMovies)

    app.route('/getMovies/details/:movieId')
        .get(movieList.readMovies)
    
    app.route('/getShowtime/:movieId')
        .get(movieList.readMovies)

    app.route('/editmovie/:movieId')
        .get(movieList.readMovies)

    app.route('/editmovie/update/:movieId')
        .post(movieList.updateMovies)

    app.route('/editmovie/add/:movieId')
        .post(movieList.createMovie)
        .get(movieList.readMovies)
}