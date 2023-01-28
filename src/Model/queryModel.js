import mongoose from "mongoose";
const querySchema=mongoose.Schema({
    firstName:{
        type:String,
        
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
       
    },
    telephone:{
        type:String,
       
    },
    
    message: {
        type:String,
       
    }
});

const Query=mongoose.model('Query',querySchema);
export default Query
