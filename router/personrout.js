const express = require('express');
const router = express.Router();
const Person=require('./../models/person');

router.post('/',async (req,res)=>{
    try{
      const data=req.body
      const newPerson=new Person(data);
  
      const responce=await newPerson.save();
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
      const data=await Person.find();
      console.log("data fatch");
      res.status(200).json(data);
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:"cant get data"});
    }
    
  })

  router.get('/:worktype',async(req,res)=>{
    try{
      const worktype=req.params.worktype;
      if(worktype == 'chef' || worktype=='waiter'|| worktype=='manager'){
        const response = await Person.find({work: worktype});
        console.log('response fatch');
        res.status(200).json(response);
       }
       else
       {
        res.status(404).json({error:'invalid work type'});
      }
    
    }catch(error){
    console.log(error);
    res.status(500).json({error:'server error'});
    
    }
    })

    router.put('/:id',async(req,res)=>{

      try{
        const personid=req.params.id;
        const updatedpersondata=req.body;

        const response=await Person.findByIdAndUpdate(personid,updatedpersondata,{
          new:true,
          runValidators:true,

        })
        if(!response){
          return res.status(404).json({error});
        }
        console.log('data updated');
        res.status(200).json(response);

       }catch(error){
        console.log(error);
        res.status(500).json({error:'server error'});

      }
    })

    router.delete('/:id',async(req,res)=>{
      try{
        const personid=req.params.id;

        const response = await Person.findByIdAndDelete(personid);
        if(!response){
          return res.status(404).json({error:'person not found'});
        }
        console.log('data deleted');
        res.status(200).json({massage:'person data delete'});

      }catch(error){
        console.log(error);
        res.status(500).json({error:'server down'})

      }

    })
    
    module.exports=router;