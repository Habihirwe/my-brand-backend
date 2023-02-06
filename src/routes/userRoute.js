

import express from 'express'
import UserController from '../Controller/userController.js';
// import verifyUserToken from '../middleware/authentication';
import verifyAdmin from '../middleware/verifyAdmin.js';

const userRoute = express.Router();




userRoute.post("/login",UserController.login );
   




userRoute.post("/signUp", UserController.createUser);
userRoute.get("/getSingleUser/:id",verifyAdmin,UserController.getSingleUser);
userRoute.get("/getAllUsers",verifyAdmin,UserController.getAllUsers)

export default userRoute