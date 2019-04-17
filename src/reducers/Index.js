import { position } from "./Position"
import { loading } from "./Loading"
import { trucks } from "./Trucks"
import { error } from "./Error"
import { user } from "./User"
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    position,
    loading,
    trucks,
    error,
    user
})