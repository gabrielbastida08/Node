const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routes
require('../src/routes/userRoutes')(app);


//static files

app.listen(app.get('port'),()=>{
    console.log('server on port 3000');
});