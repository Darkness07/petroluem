import {combineReducers} from "redux";
import {app} from "./app";
import { text } from './text';

const rootReducer = () => combineReducers({
    app,
    text
});


export default rootReducer;
