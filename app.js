const express = require ('express');
const mongoose = require('mongoose');
require('dotenv/config')
const app = express();
const port = 5000

app.get('/', (req, res) =>{
  res.send('We are the Code Queens')
})

//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK,
  {useNewUrlParser:true}
  // parsing error"mongodb+srv://CodeQueen:CodeQueen@cluster0.crbjiye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
).then(
  ()=>{console.log('Connected to the DB')}

).catch(err=>{
      console.log('Error connecting to the DB', err)
})


app.listen(port, ()=>{console.log(`Connected on port ${port}`)})
