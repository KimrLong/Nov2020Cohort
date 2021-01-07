const express = require('express');
const router = express.Router();


router.get('/bat(wo)*man?', (req, res) =>{
    res.send('<h1>Batman</h1>');
})




module.exports = router;