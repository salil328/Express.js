var express = require('express')
var router = express.Router()
router.get('/',(req,res,next)=>{
  // res.sendFile(path.join(__dirname,+'/home.html'))
   res.send("home")
   
next()
})
module.exports = router