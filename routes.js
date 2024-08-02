const express = require('express');

const router = express.Router();

                //CRUD
// GET METHOD(all posts)

router.get('/posts',(req,res)=>{
   // res.send('posts page')

   res.json(
    {msg:'Get all posts'}
   )
})
router.get('/posts/:id',(req,res)=>{
    // res.send('posts page')
 
    res.json(
     {msg:'Get a specific post'}
    )
 })

module.exports=router