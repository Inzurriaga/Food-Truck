import { position } from "./Position"
import { loading } from "./Loading"
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    position,
    loading
})