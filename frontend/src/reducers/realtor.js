export const actionTypes = {
    UPDATE_SELECTED_REALTOR:"UPDATE_SELECTED_REALTOR"
}

const realtorReducer=(state=null, action)=>{
    switch(action.type){
        case actionTypes.UPDATE_SELECTED_REALTOR:
            return{
                ...state,
                realtor:{
                    name: action.name,
                    email_id: action.email_id,
                    phone: action.phone,
                    description: action.description
                }
            }
        default:
            return state;
    }
}

export default realtorReducer;