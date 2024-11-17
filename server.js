const express = require('express')
const app = express()
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const Person=require('./models/person');


app.get('/', function (req, res) {
  res.send('welcome to my hotel')
})

const menurout=require('./router/menurout');
app.use('/menu',menurout);




const personrout=require('./router/personrout');
app.use('/person',personrout);



app.listen(3000,()=>{
    console.log("server is running");
})