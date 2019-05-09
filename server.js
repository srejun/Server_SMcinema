var express = require('express')
var cors = require('cors');
app = express()
port = process.env.PORT || 3001
mongoose = require('mongoose')
Movie = require('./api/models/movieListModel')
Theatre = require('./api/models/theatreListModel')
login = require('./api/models/loginListModel')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/SMcinema', function(error){
    if(error) throw error
    console.log('Successfully connected');
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routess = require('./api/routes/theatreListRoutes')
var routes = require('./api/routes/movieListRoutes')
var route = require('./api/routes/loginListRoutes')
route(app)
routes(app)
routess(app)

app.listen(port)

console.log('User List started on : '+ port)