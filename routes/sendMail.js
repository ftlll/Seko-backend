const express = require('express');

const router = express.Router();
 
const { setHeader, setJSONResponse } = require('../utils/res');
const sendMail = require('../utils/mail');

router.post('/', function(req, res, next) {
    const { email, subject, content } = req.body;
    setHeader(res, 'content-type', 'application/json;charset=utf-8');
    setHeader(res, 'Access-Control-Allow-Origin', '*');
    console.log(subject);
    console.log(content);
    sendMail(email, subject, content)
        .then(info => {
            res.set('Content-Type', 'application/JSON')
            res.send(JSON.stringify({ success: true }))
        })
        .catch(err => {
            res.set('Content-Type', 'application/JSON')
            res.send(JSON.stringify({ success: false }))
        });
});
 
module.exports = router;

    // sendMail(subject, content)
    //     .then(info => {
    //         setJSONResponse(res, {
    //             ret: 0
    //         });
    //     })
    //     .catch(err => {
    //         setJSONResponse(res, {
    //             ret: -1
    //         });
    //     });