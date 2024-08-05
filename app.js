const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')

const routes = require('./routes')

const app = express(); //CREATING AN EXPRESS APP

//IMPORT ROUTES
const route = require('./routes');

//use-middleware
app.use(bodyParser.json())
app.use('/api',routes)


//Routes
app.get('/', (req, res) =>{
  res.send('We are the Code Queens')
})

//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK,).then(
  ()=>{console.log('Connected to the DB')}

).catch(err=>{
      console.log('Error connecting to the DB', err)
})

//How to start listening to the server
app.listen(process.env.PORT, ()=>{console.log(`Connected on port ${process.env.PORT}`)})
