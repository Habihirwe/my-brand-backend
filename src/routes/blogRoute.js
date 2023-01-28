import express from "express"
import blogController from "../Controller/blogController"
import upload from "../helpers/multer";
import verifyAdmin from "../middleware/verifyAdmin";
const blogRoute = express();

blogRoute.post("/createBlog",upload.single("image"),verifyAdmin, blogController.createBlog);


blogRoute.put("/updatePost/:id",upload.single("image"),verifyAdmin, blogController.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:id",blogController.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs",blogController.getAllBlogs); //Get all blogs

blogRoute.delete("/deleteBlog/:id",verifyAdmin, blogController.deleteBlog); //Delete a blog


export default blogRoute