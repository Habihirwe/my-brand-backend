import express from "express"
import blogController from "../Controller/blogController"
import upload from "../helpers/multer";
const blogRoute = express();

blogRoute.post("/createBlog",upload.single("image"),blogController.createBlog);


blogRoute.put("/updatePost/:id",upload.single("image"),blogController.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:id",blogController.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs",blogController.getAllBlogs); //Get all blogs

blogRoute.delete("/deleteBlog/:id",blogController.deleteBlog); //Delete a blog


export default blogRoute