import dbConn from "./src/database/dBase";
import cors from "cors"
import dotenv from "dotenv"
import express from "express"


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const port=process.env.PORT ? process.env.PORT:5000;
dbConn();

app.listen(port ,()=>{
    console.log("The server  is listening on erfgsrtg  : " +port)
})