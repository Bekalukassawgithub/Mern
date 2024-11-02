const mongoose=require('mongoose')
const Schema=mongoose.Schema
const myDb =new Schema({

    Fname:{
    type:String,
    required:true
  },
  
    Lname:{
      type:String,
      required:true
    },
    
      Age:{
        type:Number,
        required:true
      }
    }
  
,{})
module.exports=mongoose.model("MyDb",myDb)