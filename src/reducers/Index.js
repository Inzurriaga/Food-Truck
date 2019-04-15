import { position } from "./Position"
import { loading } from "./Loading"
import { trucks } from "./Trucks"
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    position,
    loading,
    trucks
})