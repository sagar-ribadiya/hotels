const express=require('express');
const router=express.Router();
const menu=require('./../models/menu');

router.post('/',async (req,res)=>{
    try{
      const data=req.body
      const newItem=new menu(data);
  
      const responce=await newItem.save();
      console.log("data saved");
      res.status(200).json(responce);
  
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:"internal server error"});
  
    }
  })

  router.get('/',async(req,res)=>{
    try{
      const data=await menu.find();
      console.log("data fatch");
      res.status(200).json(data);
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:"cant get data"});
    }
    
  })


  module.exports=router;