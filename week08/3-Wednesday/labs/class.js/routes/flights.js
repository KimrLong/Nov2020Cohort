const express = require('express');
const router = express.Router();


router.get('/flights?/:from/:to', (req, res) =>{

    res.send(`Departing from: ${req.params.from} Ariving at: ${req.params.to}`)


})




module.exports = router;