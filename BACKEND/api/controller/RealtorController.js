import * as realtorService from '../services/realtor.service.js';

const errorhandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}

const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
}

export const getRealtor = async(request, response)=>{
    try{
        const id=request.params.id;
        const realtor=await realtorService.getRealtorById(id);
        setSuccessResponse(realtor, response);
    }
    catch(e){
        errorhandler(e.message, response)
    }
}

export const addNewRealtor = async(request, response)=>{
    try{
        const realtor=await realtorService.setNewRealtor({...request.body});
        setSuccessResponse(realtor, response);
    }
    catch(e){
        errorhandler(e.message, response)
    }
}

export const getAllRealtors = async(request, response)=>{
    try{
        const realtorList=await realtorService.getAllRealtors();
        setSuccessResponse(realtorList, response);
    }
    catch(e){
        errorhandler(e.message, response)
    }
}