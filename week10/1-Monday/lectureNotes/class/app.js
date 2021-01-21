// const { REPL_MODE_SLOPPY } = require('repl');
let db = require('./models');


// db.user.findAll()
// .then((records) => {

//     records.forEach(record =>{
//         console.log(record.id, record.firstName, record.lastName, record.email);
//     })

// })



// db.user.findByPk(3)
// .then(user =>{
//     console.log(user.firstName, user.lastName);
// })

// db.user.findAll({where: {lastName: 'Lino'}})
// .then(records =>{
//     console.log(records[0].firstName, records[0].lastName);
// })


// db.user.destroy({where: {id: 2}})
// .then(numRowsDeleted =>{
//     if(numRowsDeleted >= 1){
//         console.log(`${numRowsDeleted} rows have been deleted from the database`);
//     }
// })

// db.user.update({lastName:'Ladyda'},{where: {id: 4}})
// .then(updatedRecord =>{
//     console.log(updatedRecord[0]);
// })

// db.user.create({
//     firstName:'Kim', 
//     lastName: 'Long', 
//     email: 'me@me.com'
// });
// db.user.create({
//     firstName:'Veronica', 
//     lastName: 'Lino', 
//     email: 'Joe@me.com'
// });
// db.user.create({
//     firstName:'Adam', 
//     lastName: 'MacKinnon', 
//     email: 'Adam@me.com'
// });
// db.user.create({
//     firstName:'Kanny', 
//     lastName: 'Mohammed', 
//     email: 'Kanny@me.com'
// });
// .then(function(user){
//     console.log(user);
// });

db.blogs.findAll({  //detailed info of writer  of blog// outside include is operationg on blog table
    where: {userID: 4},  //where userID is = 1 through 4
    include:[{//include key (array) // here we give diff atributes
        model: db.user, //inlude is operating on user table
        required: true,
        // where: {firstName: 'Kim'}
    }]  
})
.then(records => {
    //[{}{}{}]

    records.forEach(blog =>{
        console.log(blog.title, blog.user.firstName, blog.user.lastName);
    })
})