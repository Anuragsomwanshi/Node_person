const express = require('express');
const app = express();
const port = 8000;
const person = require('./database');
require('dotenv').config();
const PORT = process.env.PORT || 8000

app.get('/',(req,res)=>{
res.json({msg: 'Hello laturkar'})
  })



 
const personData = require('./Routes/personData');
app.use('/person',personData);



app.listen(port,()=>{
  console.log("server started at port:",port);
})

// this is commit