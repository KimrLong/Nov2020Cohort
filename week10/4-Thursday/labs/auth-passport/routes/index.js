const express = require('express');
const router = express.Router();
const authReq = require('../auth') //in index page so no need for /index
;
router.get('/', (req, res) => {
    res.send("home page")
});

router.get('/protected', authReq, (req, res)=>{
    console.log('authenticated');
    res.send('protected')  //there is a function from passport to see if our user is valid
})

router.get('/error', (req, res)=>{

    res.send('error')
})

router.get('/logout', (req, res)=>{
    //session is cleared
    req.logout(); //put on request object bby passport

    res.redirect('/') //redirects to home page
})


module.exports = router;