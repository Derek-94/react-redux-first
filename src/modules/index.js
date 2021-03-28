import { combineReducers } from "redux";
import counterReducer from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counterReducer,
    todos
});

export default rootReducer;