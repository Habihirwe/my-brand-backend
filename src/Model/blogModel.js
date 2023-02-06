import mongoose from "mongoose";
const blogSchema = mongoose.Schema({
    image: {
      type: String,
   
    },
    title: {
        type: String,
       
      },
    description : {
      type: String,
    
    },
    likes: { 
      type: Number, 
      default: 0, 
      required: false 
    },
  
    
  });
  
  const Blog = mongoose.model("Blog", blogSchema);
  export default Blog