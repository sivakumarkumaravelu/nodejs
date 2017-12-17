//working with template engine EJS

const express=require('express');
const app=express();

app.set('view engine','ejs');

//create views folder as ejs templates are searched here

app.get('/', (req,res)=>{
    res.render("index.ejs"); //ejs is optional here
});


app.get('/contact',(req,res)=>{
    res.render('contact.ejs',{qs:req.query});
});

app.get('/profile/:name', (req, res)=>{
    let data={
        age:50,
        job:'Engineer',
        technologies:['C++','Java','Angualar','Node']
    };

    res.render('profile.ejs',{person:req.params.name,data:data})
})

app.listen(3000);
console.log("express webserver is running on localhost:3000")
