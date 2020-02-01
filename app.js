var express    = require('express'),
    mongoose   = require('mongoose'),
    cors       = require('cors'),
    sanitizer  = require('express-sanitizer'),
    bodyParser = require('body-parser'),
    routes     = require('./routes/index');

// init
var app = express();

// database connection
let mongoose_attr = { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
}; 
let databaseName = 'prayer_tracker';
mongoose.connect('mongodb://localhost/' + databaseName, mongoose_attr, (err) => {
    if (err) {
        console.log('error connecting to the database');
        console.log(err);
    }
});

// cross-origin resource sharing
app.use(cors());

// Configuring body parser middleware, allows us to use form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sanitize form data to prevent malware
app.use(sanitizer());

// use our defined routes
app.use(routes);

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';
var server = app.listen(PORT, IP, () => {
    console.log('API Server has started');
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});

/*
 * mongod --dbpath=/Users/data/db
 * sudo lsof -i tcp:3000 
 * kill -9 <PID> 
 * 
 * node app.js
 */
