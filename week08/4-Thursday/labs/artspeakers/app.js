

const express = require('express');
const app = express();
const reload = require('reload');
const socket = require('socket.io');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index')
})
let server = app.listen(3000, () => {
    console.log(`listening on port 3000`);
});
let io = socket(server);
io.on('connection', (socket)=>{
    //this message will broadcast out to each connected client 
    console.log('client conntected');
    socket.emit('chatMessage', {msg: "Hello from our backend"});
    socket.on('msgFromClient', (msgClient)=>{
        console.log(msgClient);
        //broadcasting out to all connected clients
        io.emit('msgFromServer', msgClient)
    })
});
reload(server, app);





//homework
//router.delete
//grab id (key) out of the array
//$.ajax. change method to delete. as a parameter .
//make endpoint in api that has rout
//once grab id from request. go to data and filter request
