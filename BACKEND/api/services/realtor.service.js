import Realtor from "../models/Realtor.js";

export const getRealtorById=async(id)=>{
    const realtor=await Realtor.findById(id);
    if(realtor!==null){
        return realtor;
    }
    else{
        throw new Error("Realtor not found");
    }
}

export const setNewRealtor=async(requestBody)=>{
    const newRealtor=new Realtor(requestBody);
    const responseMessage = await newRealtor.save();
    return responseMessage;
}

export const getAllRealtors=async()=>{
    const realtorList=await Realtor.find();
    return realtorList;
}