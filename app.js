var express  = require('express'),
    mongoose = require('mongoose');

var app = express();

// database connection
var mongoose_attr = { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
}; 
var databaseName = 'prayer_tracker';
mongoose.connect('mongodb://localhost/' + databaseName, mongoose_attr);

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

// mongod --dbpath=/Users/data/db
