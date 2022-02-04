import {applyMiddleware, combineReducers, createStore} from "redux";
import formReducer from "./reducers/formReducer";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const reducers=combineReducers({
    form:formReducer,
    user:userReducer,
})
export default createStore(reducers,applyMiddleware(thunk))