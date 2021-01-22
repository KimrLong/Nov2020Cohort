
//HASHing algorithim
const pbkdf2 =  require('pbkdf2');
const crypto = require('crypto');

let password = "some user password";

//random characters //20 characters
let salt = crypto.randomBytes(20).toString('hex');

console.log(salt);
//hash combo of our password and salt --this one is in bytes
let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256'); //larger the num. harder it is on CPU(?)  //randomize password/salt 3600x

// console.log(key);
//this one coverts to hex
let hash = key.toString('hex');

// console.log(hash);

//storing the hash and getting abck to what we used to create the password
//creating delimeters $$ OR **.. seperaotors of data
let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}*`;

// console.log(stored_pass);


///a person logging in - username and password 

//when you split something, it gives you an array
let pass_parts = stored_pass.split('*');
// console.log(pass_parts);

let newPass = 'some user password';         //**//where user puts in password

let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPass,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
);

// console.log(keyNewLogin);

//comparing db hash woth new hash
let hashNewLogin = keyNewLogin.toString('hex');
//here protecting the page
if(hashNewLogin === pass_parts[3]){                  //**//where we check for password
    console.log('passwords match');
}
else{
    console.log('what? try again')
}












//A rainbow table is a precomputed table for caching the output of cryptographic hash functions, usually for cracking password hashes. Tables are usually used in recovering a key derivation function (or credit card numbers, etc.) up to a certain length consisting of a limited set of characters.//