
// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parameter middleware that will run before the next routes
/*app.param('name', function(req, res, next, name) {

    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + '-dude';

    // save name to the request
    req.name = modified;
    next();
});*/

// [POST] http://localhost:8080/api/logs
app.post('/api/logs', function(req, res) {
    //res.send('response::' + req.body.message);
    res.sendStatus(200);
    console.log("received:" + req.body.message);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
