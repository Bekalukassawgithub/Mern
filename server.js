//server
const express=require('express')
const myroutes=require('./Routes/routes')
require('dotenv').config()
const mongoose=require('mongoose')

const app=express()
app.use(express.json())
app.use((req,res,next)=>{
console.log(req.path,res.method)

next()
}
)
app.use('/api',myroutes)



mongoose.connect(process.env.URI)
.then(()=>{
app.listen(process.env.PORT,()=>{
  console.log('server runing ',5000)
})
})
.catch((error)=>{
  console.log(error.massage)
})