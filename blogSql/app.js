const express = require('express');
const config = require('./config/config.json');
const app = express();
const db = require('./models');


//veiws
// app.set('view engine', 'ejs');

//static folder
// app.use(express.static("public"));

//routes
// app.use(require('./routes/index'))

// app.use(require('./views'))

// const PORT = 3005;

// app.listen(PORT, (req, res) => {
//     console.log(`listening on ${PORT}`);
// });