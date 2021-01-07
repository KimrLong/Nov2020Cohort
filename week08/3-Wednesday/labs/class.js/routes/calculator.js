const express = require('express');
const router = express.Router();


router.get('/calculator/:num1/:num2', (req, res)=>{

    var num1 = (req.params.num1);
    var num2 = (req.params.num2);
    var sum = parseInt(num1) + parseInt(num2);
    res.send(`if you add ${num1} and ${num2} = ${sum} `);

});



module.exports = router;