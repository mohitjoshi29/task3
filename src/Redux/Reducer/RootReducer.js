import { combineReducers } from "redux";
import Reducer from "./Reducer";
import ApiReducer from './New_Api_Reducer'

 const RootReducer= combineReducers({
    Reducer,
    ApiReducer
})

export default RootReducer