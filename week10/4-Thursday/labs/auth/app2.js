
const express = require('express');
const app = express();
var cookieSession = require('cookie-session');

app.use(cookieSession({

    
    name: 'session',
    keys: ['jejwiejbnwhbeiqjjwjwbje'],
    maxAge: 14 * 24 * 60 * 60 * 1000
    //day, hour, min, sec, milisec

}));

app.get('/', (req, res)=>{

    req.session.lname= "Long",

    req.session.fname = "Kim"
    res.send('home page');
})

app.get('/about', (req, res)=>{
    res.send(`${req.session.lname}, ${req.session.lname}`);
})








app.listen(3000, () =>{
    console.log('app is running...better go catch it');
})