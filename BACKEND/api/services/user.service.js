import User from '../models/User.js';
import jwt from "jsonwebtoken";

// fetch all users
export const allUsers = async() => {
    const data = await User.find().exec();
    return data;
}

// existing user check - username and password match for login
export const existingUser = async(request_data) => {
    return new Promise((resolve, reject) => {
        User.findOne({
            email: request_data.email,
            password: request_data.password
        }).then((response) => {
            console.log(response);
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

// check if the userId exists 
export const checkExistingUserID = async(extractedID) => {
    return new Promise((resolve, reject) => {
        User.findOne({
            _id: extractedID,
        }).then(async(response) => {
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

// check for the username existing
export const checkEmail = async(email) => {
    return new Promise((resolve, reject) => {
        User.findOne({
            email: email
        }).then((response) => {
            console.log(response);
            resolve(response);
        }).catch((err) => {
            reject(err);
        })
    })
}

// create a new user
export const addUser = async(req) => {
    const checkUser = await existingUser({...req.body });

    if (checkUser === null) {
        const newUser = await new User({
            ...req.body,
        });
        const data = await newUser.save();
        console.log(data, " :: ");
        return await configureToken(data);

    } else {
        return null;
    }

}

// generate a jwt token
export const configureToken = async(data) => {
    console.log("CAME to CONFIGURE TOKEN");
    const jwttoken = await jwt.sign({ _id: data._id }, process.env.TOKEN_SECRET);
    const promise = await User.findByIdAndUpdate({ _id: data._id }, {
        token: jwttoken
    }, {
        new: true
    }).exec();

    console.log("FINISHED NOW", promise);
    return promise;

}

export const userInfo = async(id) => {
    const data = await User.findById(id)
    return data;
}

// A service to update the user details
export const updateUser = async(req) => {
    const promise = await User.findByIdAndUpdate({ _id: req.params.id }, {...req.body }, {
        new: true
    });

    return promise;
}