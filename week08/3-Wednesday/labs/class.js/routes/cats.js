const express = require('express');
const router = express.Router();



router.get('/cats', (req, res) =>{
    res.send('<h1>cats rule</h1>');

})




module.exports = router;