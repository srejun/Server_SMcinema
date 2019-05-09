'use strict'
var mongoose = require('mongoose')
Movie = mongoose.model('Movie')

exports.listAllMovie = function(req, res){
    var query = { sort: { movieName: 1 } }
    Movie.find({}, null, query, function(err, movie){
        if(err) throw err
        //console.log(movie)
        res.json(movie)
    })
}

exports.createAMovie = function(req, res){
    var newMovie = new Movie(req.body)
    newMovie.save(function(err, movie){
        if(err) throw err
        res.json(movie)
    })
}

exports.readAMovie = function(req, res){
    //console.log(req.params.userId)
    Movie.findById(req.params.movieId, function(err, movie){
        if(err) throw err
        res.json(movie)
    })
}

// exports.deleteAMovie = function(req, res){
//     //console.log(req.params.userId)
//     Movie.findByIdAndUpdate(req.params.movieId, function(err, movie){
//         if(err) throw err
//         // const response = {
//         //     message: "Delete movie id: "+ req.params.userId +" successfully",
//         //     id: movie._id
//         // }
//         // res.json(response)
//     })
// }

exports.updateAMovie = function(req, res){
    //console.log(req.params.userId)
    var newMovie = {}
    newMovie = req.body
    //console.log(newUser)
    Movie.findByIdAndUpdate(req.params.movieId, newMovie, {new: true}, function(err, movie){
        if(err) throw err
        //console.log(movie)
        res.json(movie)
    })
}