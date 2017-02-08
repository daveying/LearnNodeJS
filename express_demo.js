var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
})

app.get('/index.html', function (req, res) {
    console.log('Request for index.html...');
    res.sendFile('C:\\Users\\AIMM\\Desktop\\LearnJavaScript\\LearnNodeJS\\index.html');
})

app.get('/style.css', function (req, res) {
    res.sendFile('C:\\Users\\AIMM\\Desktop\\LearnJavaScript\\LearnNodeJS\\style.css');
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("application demo, visit address is http://%s:%s", host, port);
})