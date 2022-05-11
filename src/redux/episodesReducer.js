import {GET_INIT_EPISODES_STATE,UPDATE_EPISODES_STATE,SET_ONE_EP,UPDATE_ONE_EPISODE_STATE} from './types'
let initialState = {results:[],one:{},info:{}}

export const episodesReducer = (state=initialState,action)=>{
   
    switch(action.type){

        case GET_INIT_EPISODES_STATE:
            return {...state,...action.payload}
        case UPDATE_EPISODES_STATE:
            return {...state,info:{...action.payload.info},results:[...state.results,...action.payload.results]}
        case SET_ONE_EP:
            return {...state,one:action.payload}
        case UPDATE_ONE_EPISODE_STATE:
           
         
            if (state.results.length>1){
              
                state.results= state.results.map(episode=>{
                    
                    if(episode.id == action.payload.newData.id){
                        episode=action.payload
                        episode.changed=true
                        episode.id = action.payload.newData.id
                    }       
                    return episode      
                })
            }
            return {...state,results:state.results,one:action.payload}
        default:
            return state
        }
}