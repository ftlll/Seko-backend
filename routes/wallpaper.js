const express = require('express');

const router = express.Router();
 
const { setHeader, setJSONResponse } = require('../utils/res');
const getWallpaper = require('../utils/products');

router.get('/products/:sample&:name',(req, res, next)=>{
    const sample  = req.params.sample;
    const name  = req.params.name;
    getWallpaper(sample, name)
    .then(result => {
        res.json({
            data: result
        });
    })
    .catch(err => {
        setJSONResponse(res, {
            ret: -1
        });
    });
})

module.exports = router;