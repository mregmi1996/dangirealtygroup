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
                    description: action.description,
                    image: action.image
                }
            }
        default:
            return{
                ...state,
                realtor:{
                    name: "Kumar Singh Dangi",
                    email_id: "kumar@dangirealtygroup.com",
                    phone: "(617)-319-8410",
                    description: "Kumar Dangi has been a trusted real estate professional for over 15 years. His passion is bringing together people and spaces in meaningful ways. In a business that is as much about who you know as what you know, Kumar Dangi has the knowledge, connections, and passions to make your real estate dreams come true.",
                    image: "1641269503831-realtor_kumar.jpeg"
                }
            }
    }
}

export default realtorReducer;