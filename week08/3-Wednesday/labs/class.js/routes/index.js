const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>hello, </h1>")
})

router.get('/about', (req, res) =>{
    res.send(`
    
    <link rel="stylesheet" href="css/global.css">
    <h1>about us</h1>
    `)
})


module.exports = router;