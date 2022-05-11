import { act } from 'react-dom/test-utils'
import {GET_INIT_CHARACTERS_STATE,UPDATE_CHARACTERS_STATE,UPDATE_ONE_CHARACTER_STATE,LOADING,SET_ONE_CH} from './types'
let initialState = {results:[],one:{},info:{}}

export const charactersReducer = (state=initialState,action)=>{
 
   
    switch(action.type){
      
        case GET_INIT_CHARACTERS_STATE:
            return {...state,...action.payload}
        case UPDATE_CHARACTERS_STATE:
            return {...state,info:{...action.payload.info},results:[...state.results,...action.payload.results]}
        case SET_ONE_CH:
            return {...state,one:action.payload}
        case UPDATE_ONE_CHARACTER_STATE:
           
           
            
            if (state.results.length>1){
               
                
                state.results= state.results.map(char=>{
                    
                    if(char.id == action.payload.newData.id){
                        char=action.payload
                        char.changed=true
                        char.id = action.payload.newData.id
                    }       
                    return char      
                })
            }
            return {...state,results:state.results,one:action.payload}
    default:
        return state
    }
}