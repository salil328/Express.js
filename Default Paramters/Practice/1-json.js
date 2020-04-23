const fs = require('fs')
const path = require('path')

const dataBuffer = fs.readFileSync(path.join(__dirname,'./','1-json.json'))
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Ram'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)