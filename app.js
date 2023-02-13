
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

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({useTempFiles: true}))
dotenv.config();

app.use("/api" , blogRoute);
app.use("/api" , queryRoute)
app.use("/api", userRoute)
app.use("/swaggerdoc" ,swaggerDoc.serve)
app.use("/swaggerdoc" ,swaggerDoc.setup(swaggerDocumentations))
app.use("/images", express.static("images"))



export default app;