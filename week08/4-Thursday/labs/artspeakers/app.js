const express = require('express');
const app = express();
//ejs
app.set( "view engine", "ejs");
//public
app.use(express.static('public'));



//route ref
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))




app.listen(3005, ()=>{

    console.log('server is running on port 3005');
})

//homework
//router.delete
//grab id (key) out of the array
//$.ajax. change method to delete. as a parameter .
//make endpoint in api that has rout
//once grab id from request. go to data and filter request
