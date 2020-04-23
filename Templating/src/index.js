const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
app.use(express.static(path.join(__dirname,'../public')))

const partialspath = path.join(__dirname,'../partials')
app.set('view engine','hbs')

// only when views folder has been renamed to templates 
// const viewspath  = path.join(__dirname,'../templates')
// app.set('views',viewspath) 


hbs.registerPartial(partialspath)
app.get('/weather',(req,res)=>{
    res.send({
        forecast : 'It is snowing'
    })
})
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name : 'John'

    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Weather app',
        name : 'John'

    })
})


app.listen(3000,()=>{
    console.log('server is running')
})