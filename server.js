const express = require('express')
const app = express()
const db=require('./db');
require('dotenv').config();


const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;





app.get('/', function (req, res) {
  res.send('welcome to my hotel')
})

const menurout=require('./router/menurout');
app.use('/menu',menurout);
const personrout=require('./router/personrout');
app.use('/person',personrout);

app.listen(PORT,()=>{
    console.log("server is running");
})