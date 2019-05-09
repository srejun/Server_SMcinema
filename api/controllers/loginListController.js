'use strict'
var mongoose = require('mongoose')
login = mongoose.model('signin')

exports.listAllMovie = function (req, res) {
    var query = { sort: { username: 1 } }
    console.log(req.body)
    login.find({ "username": req.body.username, "password": req.body.password }, function (err, login) {
        if (err) {
            throw err
        }
        else {
            //console.log(login)
            if (login.length > 0) {
                if ((req.body.username == login[0].username) && (req.body.password == login[0].password)) {
                    res.json(false)
                }
                else {
                    res.json(true)
                }
            }
            else {
                res.json(true)
            }
        }
    })
}

exports.createAMovie = function (req, res) {
    var newUser = new login(req.body)
    newUser.save(function (err, login) {
        if (err) throw err
        res.json("signup is success")
    })
}

exports.checkMovie = function (req, res) {
    //console.log(req.params.userId)
    console.log(req.body)
    if ((req.body.username == "") || (req.body.password == "")) {
        //console.log("false")
        res.json(false)
    }
    else {
        login.find({ "username": req.body.username, "password": req.body.password }, function (err, login) {
            if (err) {
                throw err,
                res.json(false)
            }
            else {
                //console.log(login[login.length-1].username)
                //if(req.body.username==login)
                //console.log(login.length)
                if (login.length > 0) {
                    if ((req.body.username == login[0].username) && (req.body.password == login[0].password)) {
                        res.json(true)
                    }
                    else {
                        res.json(false)
                    }
                }
                else {
                    res.json(false)
                }
            }
        })
    }
}

exports.deleteAMovie = function (req, res) {
    //console.log(req.params.userId)
    login.findByIdAndRemove(req.params.userId, function (err, login) {
        if (err) throw err
        const response = {
            message: "Delete login id: " + req.params.userId + " successfully",
            id: login._id
        }
        res.json(response)
    })
}

