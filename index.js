const express = require('express');     
const cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('mysql');
const listenPort = 4000;
 
const app = express();


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const sendMailHandler = require('./routes/sendMail');
app.use('/send-mail', sendMailHandler);

const products = require('./routes/wallpaper');
app.use('/', products);

app.listen(listenPort);
 
console.log(`server listening at port ${listenPort}`);
