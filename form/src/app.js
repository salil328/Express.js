const express = require('express')
 const bodyparser = require('body-parser')
 const fs = require('fs')

const path = require('path')
const app = express()
app.set('view engine','hbs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


app.use(express.static(path.join(__dirname,'./form')))

app.get('/',(req,res,next)=>{
    res.render('form')

})

app.post('/home',(req,res,next)=>{ 
   const details = {

        'firstname':req.body.firstname,
        'lastname' :req.body.lastname
  }
  
  //res.send(details.firstname + details.lastname)
  //console.log(details)
let data = JSON.stringify(details)

 fs.writeFileSync('details.json',data)
    console.log("data inserted ")
let output = fs.readFileSync('details.json')
let show = JSON.parse(output)
res.send(show)
//console.log(show)
})
app.listen(3000,()=>{
    console.log("server is running")
})
