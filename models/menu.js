const mongoose = require('mongoose');

const menuItemSchema= new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    teste:{
        type:String,
        enum:["sweet","spicy","sour"],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    num_sale:{
        type:Number,
        default:0
    }

})
const menu=mongoose.model('menuItem',menuItemSchema);

module.exports=menu;