
import cloudinary from "../helpers/cloudinary.js";
import Blog from "../Model/blogModel.js";
import blogValidationSChema from "../validations/blogValidation.js";

// import upload from "../helpers/multer.js";


class blogController{
    static async createBlog(req,res){
        
    try{
      const file = req.files.image
      const postImageResult = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "My_Brand-Images"
    })
      const data = Blog({
          title:req.body.title,
          description:req.body.description,
          image:postImageResult.secure_url
      })
      
          const newBlog= await data.save()
          res.status(201).json(newBlog)
      }catch (err){
          res.status(400).json({message:err.message})
      }
    }

    static async updateBlog(req, res) {
          try {
  
            const imageUrl =req.body.image
  
            const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{$set:{
                image: imageUrl,
                title: req.body.title,
               description:req.body.description,
            
              
            }},{new:true});

            if(!updatedBlog){
              res.status(200).json({
                status:"fail",
                message: "blog not found"
              });
              return;
            }
            res.status(200).json({
              status:"success",
              data:updatedBlog
            });
          } catch (error) {
            res.status(500).json({ 
              status:"fail",
              error: error.message });
          }
        }


        // get single blog

        static async getSingleBlog(req, res) {
        try {

          const singleBlog = await Blog.findById(req.params.id)
          if(!singleBlog)
          {
            res.status(404).json({
              status: "fail",
              message: "blog not found"
            })
            return;
          }
          res.status(200).json({
            status:"success",
            data: singleBlog
          });
        } catch (error) {
          res.status(500).json({
            status:"fail",
             error: error.message });
        }
      }

      //get all blogs

      static async getAllBlogs(req, res) {
        try {

          const allBlogs = await Blog.find()
         res.status(200).json({
            status:"success",
            data: allBlogs
          });
        } catch (error) {
          res.status(500).json({ 
            status: "fail",
            error: error.message });
        }
      }

      //delete a blog

      static async deleteBlog(req, res) {
        try {
          const blog = await Blog.findById(req.params.id)
          if(!blog){
            res.status(404).json({
              status :"fail",
              error :"blog not found"
            });
            return;
          }
    
          await blog.remove()
          res.status(200).json({
            status:"success",
            message:"Blog deleted successfully",
          });
          
        } catch (error) {
          res.status(500).json({
            staus : "fail",
             error: error.message });
        }
      }

    
    
}
export default blogController