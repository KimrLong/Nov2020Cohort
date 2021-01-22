

const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models');
// const passport = require('./passport-instance');

//req.body.username
//req.body.password
//this is a call back functoin. saying we are returning something. implicit
const init = (passport)=>{ //passport uses done instead of next
    passport.use( new localStrategy((username, password, done)=>{
        console.log(`inside passport.use: username ${username}, password: ${password}`);
        db.users.findAll({where: {username: username}})
        .then(records =>{
            if(records != null){
                let record = records[0];

                bcrypt.compare(password, record.password, (err, res)=>{

                    if (response){
                        //this means a match, user with correct password
                        done(null, {id: record.id, username:record.username})
                    }
                    else{
                        //no session for you. username mismatch
                        done(null, false)
                    }
                })
            }
            else{
                done(null, false)  //saying nothing came back. no seesion for you
            }
        })

    }))

    passport.serializeUser((user, done)=>{
        //passport adding info to the sessions
        done(null, user.id)
    })

    passport.deserializeUser((id, done)=>{
        //checking to see if user is valid w/ cookie that was passed from request.. unpack the cookie.
        console.log('deserializing user');
        db.users.findByPk(id) //from session
        .then(record =>{
            done(null, record)
        })

    })
}


module.exports = init;