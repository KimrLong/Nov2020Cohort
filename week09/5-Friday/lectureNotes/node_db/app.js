const express = require('express');
const app = express();





//learnpgPromise(db)

let config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurant2',
    user: 'postgres'
};

let pgp = require('pg-promise')();

let db = pgp(config);// database obj - gives access to perform CRUD op. 

// console.log(db);
//~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~_~_~_~_~_~_~_~_~_~_~_~_~_~_
// db.query(`SELECT * FROM employees.department`)
// .then(records =>{
//     // records = array of objects
//     console.log(records);
//     // console.log(records[1].dept_name);
//     let arr = records.filter(record=>{
//         return record.id == 'd005'
//     })
//     console.log(arr[0].dept_name);
// })
// .catch(error =>{
//     console.log(error);
// })
//~_~_~_~_~_~_~_~__~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~_~_~_~_~_~_~_~_~_~_~_~

// db.one(`SELECT * FROM employees.department WHERE id='d005'`)
// .then(result =>{
//     console.log(result.dept_name);
// }) //use one for one line, error if there is more than one
// .catch(error =>{
//     console.log(error)
// })
//~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~

// db.result(`INSERT INTO restaurant VALUES (DEFAULT, 'Pappys', '123Seseme', 'swedish'); `)
// .then(result=>{ //entered value into table
//     console.log(result);
// })
//~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~

// let cat = req.body.id
db.result(`INSERT INTO restaurant VALUES (DEFAULT, $1)`, ['Romanian'])
.then(result =>{
    console.log(result);
})


 app.listen(3000, (req, res) => {
    console.log(`listening on port 3000`);
});


// pgp.end()

