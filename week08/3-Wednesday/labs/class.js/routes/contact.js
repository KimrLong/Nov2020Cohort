const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) =>{
    let userName = req.param('name')
    console.log(userName);
    res.send('<h1>hello here ${userName}</h1>')
})
router.get('/contact/:name', (req, res) =>{
    let userName = req.params.name
    console.log(userName);
    res.send('<h1>hello here ${userName}</h1>')
})




module.exports = router;