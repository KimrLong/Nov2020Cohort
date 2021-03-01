


const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.use(require('./routes/authenticaition'));


app.listen(3001, ()=>{
    console.log(`listening on port 3001`);
})


















// const jwt = require ('jwt-simple');          //make a token

//user information

// let userInfo = {
//     id: '12345',
//     userName: 'Kim',
//     email: 'kim@me.com'
// }

//create a function that returns a jwt token

// const token = (user) => {
//     let timeStamp = new Date().getTime();  //current time

//     return jwt.encode({sub: user.id, name: user.userName, iat:timeStamp }, "hihebfhveyfhwnydgf838hhdh3"); //encode crates token
// }


//create jwt token

//call function and pass to our user

// let jwtToken = token(userInfo);

// console.log(jwtToken);

