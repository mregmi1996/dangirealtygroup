import * as UserService from "../services/user.service.js";

// error and success handlers

const errorHandler = (message, res) => {
    res.status(400).json({ error: message });
}

const successHandler = (message, data, res) => {
    res.status(200).json({ message: message, data: data });
}

// fetch all users
export const allUsers = async (req, res) => {
    try {

        const data = await UserService.allUsers();
        successHandler("success", data, res);

    } catch(err) {
        errorHandler(err.message, res);
    }
}

// post a user to DB
export const addUser = async (req, res) => {
    try {

        const result = await UserService.addUser(req);

        if(result === null) {
            successHandler("User already exists!", result, res);
        } else {
            successHandler("success", result, res);
        }

    } catch(err) {
        errorHandler(err.message, res);
    }
}

// user login process
export const loginUser = async (req, res) => {
    try {

        const result = await UserService.existingUser({ ...req.body });

        if(result !== null) {

            try {
                const getUserWithToken = await UserService.configureToken(result);

                successHandler("success", getUserWithToken, res);

            } catch(err) {

                errorHandler(err.message, res);
            }

            

        } else {
            errorHandler("failed", res);
        }

    } catch(err) {

    }
}

// get a user's info
export const getUserInfo = async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await UserService.checkExistingUserID(id)
        successHandler("success",result, res)
    }
    catch(err){
        errorHandler(err.message, res);
    }
}

// check user name validity
export const checkEmail = async (req, res) => {
    try {

        const result =  await UserService.checkEmail(req.params.email);

        if(result !== null) {
            successHandler("success", result, res);
        } else {
            errorHandler("failed", res);
        }
    } catch (err) {

        errorHandler(err.message, res);
    }
}

// put request to update user details by ID
export const updateUserByID = async (req, res) => {
    try {
        
        const result = await UserService.updateUser(req);

        if(result !== null) {
            successHandler("success", result, res);
        } else {
            errorHandler("failed", res);
        }

    } catch(err) {
        errorHandler(err.message, res);
    }
}

// fetching user info by id
export const getUserInfoById = async (userId) => {
    const seekerInfo = await UserService.checkExistingUserID(userId);
    return seekerInfo;
}