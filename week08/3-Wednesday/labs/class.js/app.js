//express is middleware
//client => request => express => response

const express = require('express');
const app = express();

app.use(express.static('public'))

//subrouts

// app.use(require('./routes/index'))
app.use(require('./routes/cats'))
app.use(require('./routes/dogs'))
app.use(require('./routes/batman'))
app.use(require('./routes/contact')) 
app.use(require('./routes/api'))
app.use(require('./routes/dogs'))
app.use(require('./routes/flights'))
app.use(require('./routes/calculator'))
app.use(require('./routes/homework'))







app.listen(3000, () =>{
    console.log('running on port 3001');

})


