const express = require('express');

const router = express.Router();

const Post = require('./postSchema')

                //CRUD
// GET METHOD(all posts)

router.get('./posts',(req,res)=>{
   // res.send('posts page')

   res.json(
    {msg:'Get all posts'}
   )
})
router.get('/posts/:id',async(req,res)=>{
    // res.send('posts page')
 
    res.json(
     {msg:'Get a specific post'}
    )
 })

 router.post('/posts',async(req,res) => {
   const post = new Post({
      
      postTitle:req.body.postTitle,
      postNumber:req.body.postNumber,
      postContent:req.body.postContent,
 })
    try{ 
      const savedpost = await post.save();
      res.json (savedpost)
    }

    catch (err){
      res.json({msg:err})
    }
 })

module.exports=router