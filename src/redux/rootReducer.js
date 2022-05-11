import { combineReducers } from "redux";
import {charactersReducer} from './charactersReducer'
import {locationsReducer} from './locationsReducer'
import {episodesReducer} from './episodesReducer'
import {loadingReducer} from './loadingReducer.js'
export const rootReducer=combineReducers({
    locations:locationsReducer,
    characters:charactersReducer,
    episodes:episodesReducer,
    loading:loadingReducer
})