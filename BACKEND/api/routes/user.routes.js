import express from "express";
import authenticate from '../auth/auth.js';
import * as UserController from "../controller/UserController.js";

const Router = express.Router();

Router.route('/users')
    .get(authenticate, UserController.allUsers)
    .post(UserController.addUser);

Router.route('/login')
    .post(UserController.loginUser);

Router.route('/users/:id')
    .get(UserController.getUserInfo)
    .put(UserController.updateUserByID);

Router.route('/validate/:email')
    .get(UserController.checkEmail);


export default Router;
