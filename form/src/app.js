const express = require('express')
 const bodyparser = require('body-parser')
const multer = require('multer')
const upload = multer()
const path = require('path')
const app = express()
app.set('view engine','hbs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(upload.array)
//
app.use(express.static(path.join(__dirname,'./form')))

app.get('/',(req,res)=>{
    res.render('form')
  
})

app.post('/home',(req,res)=>{ 
    res.send("received your request")
})
app.listen(3000,()=>{
    console.log("server is running")
})