const express = require('express');
const router = express.Router();

router.get('/dogs?', (req, res) =>{
    res.send('<h1>dogs drool</h1>');

})

router.get('/dogs/:id', (req, res)=>{
    let id = req.params.id;

    // data.data[id].name, data.data[id].img
    res.send(`
    
        <h1>${data.data[id].name}</h1>

        <ul>
            <li><ahref="/dogs/0>${data.data[0].name}</a></li>
            <li><ahref="/dogs/1>${data.data[1].name}</a></li>
            <li><ahref="/dogs/2>${data.data[2].name}</a></li>
            <li><ahref="/dogs/3>${data.data[3].name}</a></li>

        </ul>

        <img height="300px" src="${data.data[id].img}">
    
    `)
    res.send(`${id}`)

})





module.exports = router;