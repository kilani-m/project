import {combineReducers} from "redux"
import {coursesReducer} from "./coursesReducer"
import {userReducer} from "./userReducer"
import {contactReducer} from "./contactReducer"



export const rootReducer=combineReducers({coursesReducer,userReducer,contactReducer})