'use strict'
var mongoose = require('mongoose')
Theatre = mongoose.model('Theatre')

exports.listAllTheatre = function(req, res){
    console.log(req.params)
    Theatre.find({theatre:req.params.theatreName}, function(err, theatre){
        if(err) throw err
        //console.log(theatre)
        res.json(theatre)
    })
}

exports.createATheatre = function(req, res){
    var newTheatre = new Theatre(req.body)
    newTheatre.save(function(err, theatre){
        if(err) throw err
        res.json(theatre)
    })
}

exports.updateATheatre = function(req, res){
    //console.log(req.params.userId)
    var newTheatre = {}
    newTheatre = req.body
    console.log(req.params)
    Theatre.findByIdAndUpdate(req.params.theatreId, newTheatre, {new: true}, function(err, theatre){
        if(err) throw err
        //console.log(theatre)
        res.json(theatre)
    })
}