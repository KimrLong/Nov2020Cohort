const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/index'));








app.listen(3001, ()=>{

  console.log('server is running on port 3001');
})