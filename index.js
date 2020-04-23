var express = require('express');
var path = require('path');
var app = express(); // this is just instance creation

//router = app.router;
//app.use(express.static(path.join(__dirname ,'/home.html')));
app.set('view engine','ejs');

app.get('/',(req,res)=>{res.sendfile(__dirname +'/home.html')});
app.get('/about',(req,res)=>{res.sendfile(__dirname +'/about.html')});
//app.get('/about',(req,res)=>{res.send("this is about")})
app.get('/contact',(req,res)=>{res.send("this is contact")})
var students = {
    1 : {name :'mark', languages : ['ruby' , 'C']},
    2 : {name :'john', languages : ['perl','java']},
    3 : {name :'tom' , languages :['python' , 'C++']},
};
app.get('/students/:id',(req,res)=>{
    res.render('students',{name : students[req.params.id],id : req.params.id ,languages: students[req.params.id].languages});})
    app.listen(3000,()=>{
        console.log("server is running")
    })
