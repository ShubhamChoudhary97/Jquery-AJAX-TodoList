const express = require('express')
const todoRoute = require('./routes/todos')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/hello',(req,res)=>{
    res.send('Hello World')
})
app.use('/public',express.static(__dirname+"/public"))
app.use('/todos',todoRoute)

app.listen(5555,()=>{
    console.log('Server started')
})