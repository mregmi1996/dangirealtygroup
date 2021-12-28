import realtorReducer from "./realtor";
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    realtorReducer: realtorReducer
});

export default allReducers;