const express = require('express');
const router = express.Router();
const authReq = require('../auth')
;
router.get('/', (req, res) => {
    res.send("home page")
});

router.get('/protected', authReq, (req, res)=>{

    res.send('protected')
})

router.get('/error', (req, res)=>{

    res.send('error')
})

router.get('/logout', (req, res)=>{
    req.logout();

    res.redirect('/')
})


module.exports = router;