
import app from "./app.js";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
})

const PORT=process.env.PORT || 5000
const NODE_ENV=process.env.NODE_ENV
const port=NODE_ENV!=='test' ? PORT:3100
 app.listen(port ,()=>{
    console.log("The server  is listening on   : " +port)
})


export default app;