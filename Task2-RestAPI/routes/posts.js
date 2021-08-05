const express = require('express');
const router=express.Router();
const Post=require('../models/Post');

//Routes


//Getting All Posts
router.get('/',async (req,res)=>{
    try{
        const posts= await Post.find();
        res.json(posts);
    }
    catch(err){
        console.log(err)

        res.json({ message: err })
    }

})


//Get A Single Post By Id
router.get('/:postId',async (req,res)=>{
    try{
        const post= await Post.findById(req.params.postId);
        res.json(post)    
    }    
    catch(err){
        console.log(err)

        res.json({ message: err })
    }
})

//Adding a New Post
router.post('/', async (req,res)=>{
    console.log(req.body)
    const post= new Post({
        title:req.body.title,
        author:req.body.author,
        content:req.body.content,

    });
    try{
        const savedPost=await post.save();
        res.json(savedPost);
    }    
    catch(err){
            console.log(err)

            res.json({ message: err })
        }
    })


//Delete a Post By Id
router.delete('/:postId',async (req,res)=>{
    try{
        const removedPost= await Post.remove({_id: req.params.postId});
        res.json(removedPost);   
    }    
    catch(err){
        console.log(err)

        res.json({ message: err })
    }
})

//Update Title of a Post By Id
router.patch('/:postId',async (req,res)=>{
    try{
        const updatedPost= await Post.updateOne(
            {_id: req.params.postId},
            {$set:{title: req.body.title}
        }
            );
        res.json(updatedPost);   
    }    
    catch(err){
        console.log(err)

        res.json({ message: err })
    }
})

module.exports=router;