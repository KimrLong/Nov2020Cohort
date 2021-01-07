const express = require('express');
const router = express.Router();
let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
]
let nameArr = [
    "Woody",
    "RJ",
    "Micah",
    "Jeremy",
    "Chris",
    "Dan",
    "Cainan",
    "Michael"
]
let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
]
let num = 4;

let obj = {
    firstName: "Kim",
    lastName: "long"
}
router.get('/', async (req, res) => {
    //async await

    let data = axios.get('https://corona.lmao.ninja/v2/states')
    // axios.get('https://corona.lmao.ninja/v2/states')
    // .then(data =>{
    //     console.log(data);


    res.render('index', {
        pic: pictures,
        city: cities,
        names: nameArr,
        num: num,
        obj : obj,
        data: data

        }) // pics:pictures
    })

    // res.render('index', {
    //     pic1: pictures[0],
    //     pic2: pictures[1],
    //     pic3: pictures[2]
    //     Atlanta: cities[0],
    //     Houston: cities[1],
    //     Seattle: cities[2],
    //     Miami: cities[3],
    // })

    // res.render('index', {
    //     firstname:"Kim",
    //     lastName: "Long"
    // });


// router.get('/:id', (req, res) => {
//     var id = req.params.id;
//     res.render('index', {
//         pics: pictures[id]
//     })

// })
router.get('/:id', (req, res) => {
    var id = req.params.id;
    res.render('index', {
        pic: pictures,
        city:cities,
        names: nameArr
        

    })

})

module.exports = router;