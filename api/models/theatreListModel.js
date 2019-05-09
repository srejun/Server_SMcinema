'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TheatreSchema = new Schema({
    theatre: {
        type: String,
        Required: 'Please enter'
    },
    movieNameThai: {
        type: String,
        Required: 'Please enter'
    },
    movieName: {
        type: String,
        Required: 'Please enter'
    },
    showTime: {
        type: Array,
        Required: 'Please enter'
    },
    seat: {
        type: Array,
        Required: 'Please enter'
    },
    booked: {
        type: Array,
        Required: 'Please enter'
    },
    confirm: {
        type: Array,
        Required: 'Please enter'
    },
    createdDate:{
        type: Date,
        default :Date.now

    }
})

module.exports = mongoose.model('Theatre', TheatreSchema)