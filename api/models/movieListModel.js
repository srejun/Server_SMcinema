'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MovieSchema = new Schema({
    movieName: {
        type: String,
        Required: 'Please enter'
    },
    movieNameThai: {
        type: String,
        Required: 'Please enter'
    },
    details: {
        type: String,
        Required: 'Please enter'
    },
    trailer:{
        type: String,
        Required: 'Please enter'
    },
    length: {
        type: String,
        Required: 'Please enter'
    },
    showTime: {
        type: Array,
        Required: 'Please enter'
    },
    theatre:{
        type: String,
        Required: 'Please enter'
    },
    imageUrl:{
        type: String,
        Required: 'Please enter'
    },
    price:{
        type: String,
        Required: 'Please enter'
    },
    status:{
        type: Boolean,
        Required: 'Please enter'
    },
    createdDate:{
        type: Date,
        default :Date.now

    }
})

module.exports = mongoose.model('movies', MovieSchema)