var express = require('express')

var app = express()
app.use('/',(req,res,next)=>{
    console.log("Start")
    next()
})
//app.get('/',(req,res,next)=>{res.sendFile(__dirname,+'/home.html')
app.get('/',(req,res,next)=>{res.send("home")
next()});
app.use('/contact',(req,res,next)=>{
    console.log("End")
    next()
})
app.listen(3000)
