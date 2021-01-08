const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {

    // axios.get()

    res.send('who will win the battle?')
})




module.exports = router;