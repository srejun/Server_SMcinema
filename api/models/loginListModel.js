'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MovieSchema = new Schema({
    username: {
        type: String,
        Required: 'Please enter'
    },
    password:{
        type: String,
        Required: 'Please enter'
    },
    // firstName: {
    //     type: String,
    //     Required: 'Please enter'
    // },
    // lastName: {
    //     type: String,
    //     Required: 'Please enter'
    // },
    //missed left last_name
    
})

module.exports = mongoose.model('signin', MovieSchema)