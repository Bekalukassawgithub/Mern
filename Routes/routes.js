const express =require('express')
const route=express()
const myDb= require('../Models/Mydb')
route.get('/', async (req,res)=>{
  const mydb = await myDb.find({}).sort({_id:1})
  res.status(200).json(mydb)
  //res.json({1:"hi hello"})
})
route.get('/:id', async (req,res)=>{
  const {id} =req.params
  const mydb = await myDb.findById(id)
  if(!mydb){
    res.status(404).json({mssg:"no such id"})
  }
 res.status(200).json(mydb)
})
route.post('/', async (req,res)=>{
  const {Fname,Lname,Age}=req.body
  try{
    const MyDb = await myDb.create({Fname,Lname,Age})
    res.status(200).json(MyDb)
  }
  catch(error){
    res.status(400).json({error: error.message})
  }
//  res.json({mssg:"this is post"})
})
module.exports=route