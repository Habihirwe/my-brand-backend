import express, { Router } from "express"
import blogController from "../Controller/blogController"
import upload from "../helpers/multer";
import verifyAdmin from "../middleware/verifyAdmin";
const blogRoute = express();

blogRoute.post("/createBlog",upload.single("image"),verifyAdmin, blogController.createBlog);


blogRoute.put("/updatePost/:id",upload.single("image"),verifyAdmin, blogController.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:id",blogController.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs",blogController.getAllBlogs); //Get all blogs

blogRoute.delete("/deleteBlog/:id",verifyAdmin, blogController.deleteBlog); //Delete a blog

blogRoute.put('/like/:id',async(req,res)=>{
    try{
        const blog= blog.findById(req,params.id);
        if(blog.likes.filter(like=>like.user.toString()===req.user.id).lenth>0){
            return res.status(400).json({msg: 'blog already liked'})
        }
        blog.likes.unshift({user:req.user.id});
        await blog.save()
        res.json(blog.likes);
    }catch(err){
        console.error(err.message)
        res.status(500).send('server error');
    }
});


export default blogRoute