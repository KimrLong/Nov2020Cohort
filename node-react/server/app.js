let express = require('express');
let app = express();





app.get('/api', (req, res)=>{
    res.json([
        {
        id: 1,
        name: 'Bob',
        },
        {
        id: 2,
        name: 'Sue',
        },
        {
        id: 3,
        name: 'Tom',
        },
        {
        id: 4,
        name: 'Pam',
        }


    ])
})


app.listen(3005, ()=>{
    console.log(`listening on port 3005`)
})