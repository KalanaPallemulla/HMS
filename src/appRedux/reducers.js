import { combineReducers } from "redux";

//reducers
import homeReducer from "../pages/Home/redux/reducer";

const rootReducer = combineReducers({ homeReducer });

export default rootReducer;
