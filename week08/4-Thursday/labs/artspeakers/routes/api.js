const express = require("express");
const router = express.Router();
const feedbackData = require('../data/feedback.json');
const fs = require('fs'); //allows to read and write to a file
router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get("/api", (req, res) =>{
    res.json(feedbackData)
});

router.post('/api', (req, res)=>{
    //grab data form requesr-body parser
    // let name = req.body.name;
    // let title = req.body.title;
    // let message = req.body.message;// need this for individ info for project, with message. (bandObj.message)
    console.log(req.body);
    feedbackData.unshift(req.body);
    //take current data add new obj.
   
    //[{}, {}, {} {name, title, message}
    //unshift (new item) 
     //write to the feedback file feedback.json a new obj
     fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{
         if(err){
             console.log(err);
         }
     })
     //send back feedback.jsonData
     res.json(feedbackData);
    
})
module.exports = router;