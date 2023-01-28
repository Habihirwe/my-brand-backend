

import express from 'express'
import UserController from '../Controller/userController';
import User from '../Model/userModel';
// import verifyUserToken from '../middleware/authentication';
import verifyAdmin from '../middleware/verifyAdmin';

const userRoute = express.Router();




userRoute.post("/login",UserController.login );
   




userRoute.post("/signUp", UserController.createUser);
userRoute.get("/getSingleUser/:id",verifyAdmin,UserController.getSingleUser);
userRoute.get("/getAllUsers",verifyAdmin,UserController.getAllUsers)

export default userRoute