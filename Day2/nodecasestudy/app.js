const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

//Load the below module for session and cookies-Client session is a middleware
const session = require('client-sessions');

//add the below module for encryption
const bcrypt = require('bcryptjs');

//add below module to prevent CSRF attack.
const csurf = require('csurf');


var Schema = mongoose.Schema;  //Creating a schema using mongoose.
var ObjectId = Schema.ObjectId; //for creating a primary key
var User = mongoose.model('User', new Schema({
    id: ObjectId,
    firstName: {type:String},
    lastName:{type:String},
    email:{type:String, required:'Email is required', unique:true},
    password:{type:String}
}));

let app=express();

app.set('view engine','ejs');
app.locals.pretty=true; //will display formatted html. In view page source it will have good look and feel.

//connect to mongo database using mongoose
mongoose.connect('mongodb://localhost/testdb');

//configure middleware
app.use(bodyparser.urlencoded({extended:true})); //for form post

//session configuration with cookies (Middleware)
app.use(session({
    cookieName:'session',
    secret:'fjsd2jfsflkjs3klsjfsblablabla',  //real time get it from verisign. dynamic token.
    duration:30*60*1000,
    activeDuration:5*60*1000  //optional, server side time, part of middleware.
}));

//configure route
app.get('/', (req,res)=>{
    //res.send('<h1>Welcome to Dashboard case study</h1>')
    res.render('index.ejs')
});

//Register actions
app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', (req, res)=>{
    //now encrypt password with hash and store in DB
    var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)); //10 is full strong

    var user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        //Hash the password
        password: hash
        //next in post of login, decrypt and check
    });

    user.save((err)=>{
        if(err){
            var error = 'Something bad happened... Try again!';
            if(err.code===11000){
                error = 'Sorry...email is already existing'
            }
            res.render('register.ejs');
        }else{
            res.redirect('/dashboard')
        }

    });
});


//Login page actions
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req,res)=>{
    User.findOne({email:req.body.email}, (err,user)=>{
        if(!user){
            res.render('login.ejs',{error:'Invalid email or password!'})
        }else{
            //here decrypt and compare
            if (bcrypt.compareSync(req.body.password, user.password)){
                //write user details in session with cookie here.
                req.session.user=user; //set-cookie session={email:'...',password}
                //next in dashboard check if session exists allow else do
                res.redirect('/dashboard');
            }else{
                res.render('login.ejs',{error:'Invalid email or password'})
            }
        }
    });
});


app.get('/dashboard', (req, res) => {
    //add the bleow code to check the session of user.

    if(req.session && req.session.user){
        User.findOne({ email: req.session.user.email }, (err, user)=>{
            if (!user){
                req.session.reset();
                res.redirect('/login');
            }else{
                res.locals.user=user;
                res.render('dashboard.ejs');
            }
        });
    }else{
        res.redirect('/login');
    }
});
app.get('/logout', (req, res) => {
    req.session.reset();
    res.redirect('/');
});

app.listen(3000);

console.log("server running on localhost:3000")
