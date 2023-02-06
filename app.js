
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import blogRoute from "./src/routes/blogRoute";
import queryRoute from "./src/routes/queryRoute";
import userRoute from "./src/routes/userRoute";
import swaggerDoc from "swagger-ui-express"
import swaggerDocumentations from "./src/documentations/swaggerdoc";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api" , blogRoute);
app.use("/api" , queryRoute)
app.use("/api", userRoute)
app.use("/swaggerdoc" ,swaggerDoc.serve)
app.use("/swaggerdoc" ,swaggerDoc.setup(swaggerDocumentations))
app.use("/images", express.static("images"))



export default app;