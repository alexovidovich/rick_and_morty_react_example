import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { act } from 'react-dom/test-utils'
import {GET_INIT_CHARACTERS_STATE,UPDATE_CHARACTERS_STATE,UPDATE_ONE_CHARACTER_STATE,LOADING,SET_ONE} from './types'
let initialState = true

export const loadingReducer = (state=initialState,action)=>{
 
   
    switch(action.type){
        case LOADING:
            return action.payload
        default:
            return state
    }
}