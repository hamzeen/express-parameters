
// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
});


// [POST] http://localhost:8080/api/logs
app.post('/api/logs', function(req, res) {
    res.send('response::' + req.body.message);
    // res.sendStatus(200);
    console.log("received:" + req.body.message);
});

// start the server
app.listen(port);
console.log('magic happens at http://localhost:' + port);
