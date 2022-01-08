import realtorReducer from "./realtor";
import userReducer from "./user";
import {combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { createStore } from 'redux';

const allReducers=combineReducers({
    realtorReducer: realtorReducer,
    userReducer: userReducer
});


const persistConfig={
    key:"primary",
    storage
}

const persistedReducer=persistReducer(persistConfig, allReducers);

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
const persistor = persistStore(store);

export {persistor}
export default store;