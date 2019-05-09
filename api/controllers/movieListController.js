'use strict'
var mongoose = require('mongoose')
Movie = mongoose.model('movies')

exports.listAllMovies = function(req, res){
    var query = { sort: { _id: 1 } }
    Movie.find({}, null, query, function(err, user){
        if(err) throw err
        //console.log(user)
        res.json(user)
    })
}

exports.createMovie = function(req, res){
    var newMovie = new Movie(req.body)
    newMovie.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.readMovies = function(req, res){
    console.log(req.params.movieId)
    Movie.findById(req.params.movieId, function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.updateMovies = function(req, res){
    console.log(req.params.movieId)
    var newMovie = {}
    newMovie = req.body
    console.log(newMovie)
    Movie.findByIdAndUpdate(req.params.movieId, newMovie, {new: true}, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}