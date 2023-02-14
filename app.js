
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import blogRoute from "./src/routes/blogRoute.js";
import queryRoute from "./src/routes/queryRoute.js";
import userRoute from "./src/routes/userRoute.js";
import swaggerDoc from "swagger-ui-express"
import swaggerDocumentations from "./src/documentations/swaggerdoc.js";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: "100mb", extended: true}))
app.use(express.urlencoded({limit: "100mb", extended: true, parameterLimit: 50000}))
app.use(fileUpload({useTempFiles: true}))
dotenv.config();

app.use("/api" , blogRoute);
app.use("/api" , queryRoute)
app.use("/api", userRoute)
app.use("/swaggerdoc" ,swaggerDoc.serve)
app.use("/swaggerdoc" ,swaggerDoc.setup(swaggerDocumentations))
app.use("/images", express.static("images"))



export default app;