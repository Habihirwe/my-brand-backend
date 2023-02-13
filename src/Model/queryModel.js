import mongoose from "mongoose";
const querySchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
        
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

       
    },
    telephone:{
        type:String,
        required:true
       
    },
    
    message: {
        type:String,
        required:true
       
    }
});

const Query=mongoose.model('Query',querySchema);
export default Query
