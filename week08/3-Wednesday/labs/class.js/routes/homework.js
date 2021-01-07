const express = require('express');
const router = express.Router();

router.get('/hello1/:name/:year', (req, res)=>{
    var name = (req.params.name);
    var year = (req.params.year);
    var date = 2020;
    var birthYear = parseInt(date) - parseInt(year);
    res.send(`Hello,  ${name} you are ${birthYear} years old! `);
})





module.exports = router;