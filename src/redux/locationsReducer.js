import {GET_INIT_LOCATIONS_STATE,UPDATE_LOCATIONS_STATE,UPDATE_ONE_LOCATION_STATE,SET_ONE_LC} from './types'
let initialState = {results:[],one:{},info:{}}

export const locationsReducer = (state=initialState,action)=>{
   
    switch(action.type){
        case GET_INIT_LOCATIONS_STATE:
            return {...state,...action.payload}
        case UPDATE_LOCATIONS_STATE:
            return {...state,...action.payload,results:[...state.results,...action.payload.results]}
        case SET_ONE_LC:
            return {...state,one:action.payload}
        case UPDATE_ONE_LOCATION_STATE:
            
       
            if (state.results.length>1){
             
                state.results= state.results.map(location=>{
                    
                    if(location.id == action.payload.newData.id){
                        location=action.payload
                        location.changed=true
                        location.id = action.payload.newData.id
                    }       
                    return location      
                })
            }
            return {...state,results:state.results,one:action.payload}
        default:
            return state
        }
}