import express from "express"
import queryController from "../Controller/queryController"
import verifyAdmin from "../middleware/verifyAdmin";
const queryRoute =express.Router();

queryRoute.post("/createMessage",queryController.createQuery);
queryRoute.get("/getSingleMessage/:id",verifyAdmin, queryController.getSingleMessage);
queryRoute.get("/getAllMessages",verifyAdmin, queryController.getAllMessages)

export default queryRoute