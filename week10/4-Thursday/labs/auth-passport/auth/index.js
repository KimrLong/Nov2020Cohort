//where we create our middleware

let authReq = (req, res, next) =>{

//is authenticated is going to check decerialization function and see if info is in database (pass.config page)
    let auth = req.isAuthenticated();

    console.group(req.isAuthenticated())
    
    if(req.isAuthenticated()){ 
        next();
    }else{
        res.redirect("/error");
    }
};

module.exports = authReq;