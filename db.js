const mongoose=require('mongoose');

const mongourl="mongodb://localhost:27017/hotel"

mongoose.connect(mongourl,{
    useNewUrlParser:true,
    //userUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("mongodb connected to server");
})
db.on('error',()=>{
    console.log("mongodb connection error");
})
db.on('disconnected',()=>{
    console.log("mongodb disconnected to server");
})
//comment for hotel
module.exports=db;