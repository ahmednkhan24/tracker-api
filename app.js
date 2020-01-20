var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.json({ username: 'hello world' });
    
});

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';
var server = app.listen(PORT, IP, function(){
    console.log('API Server has started');
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});
