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
    
  });
  
  const Blog = mongoose.model("Blog", blogSchema);
  export default Blog