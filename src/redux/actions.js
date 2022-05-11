import {
    GET_INIT_LOCATIONS_STATE,UPDATE_LOCATIONS_STATE,
    GET_INIT_EPISODES_STATE,UPDATE_EPISODES_STATE,
    GET_INIT_CHARACTERS_STATE,UPDATE_CHARACTERS_STATE,
    UPDATE_ONE_CHARACTER_STATE,LOADING,SET_ONE_CH,SET_ONE_EP,
    UPDATE_ONE_EPISODE_STATE,UPDATE_ONE_LOCATION_STATE,
    SET_ONE_LC

}
from './types'

export function get_init_locations_state_action(payload){
    
    return{
        type:GET_INIT_LOCATIONS_STATE,
        payload:payload
    }
}
export function update_locations_state_action(payload){
    return{
        type:UPDATE_LOCATIONS_STATE,
        payload:payload
    }
}
export function get_init_episodes_state_action(payload){
    return{
        type:GET_INIT_EPISODES_STATE,
        payload:payload
    }
}
export function update_episodes_state_action(payload){
    return{
        type:UPDATE_EPISODES_STATE,
        payload:payload
    }
}
export function get_init_characters_state_action(payload){
    return{
        type:GET_INIT_CHARACTERS_STATE,
        payload:payload
    }
}
export function update_characters_state_action(payload){
    return{
        type:UPDATE_CHARACTERS_STATE,
        payload:payload
    }
}
export function update_one_character_state_action(payload){
    return{
        type:UPDATE_ONE_CHARACTER_STATE,
        payload:payload
    }
}
export function update_loading_action(payload){
    return{
        type:LOADING,
        payload:payload
    }
}
export function set_one_ch_action(payload){
    return{
        type:SET_ONE_CH,
        payload:payload
    }
}
export function set_one_ep_action(payload){
    return{
        type:SET_ONE_EP,
        payload:payload
    }
}
export function update_one_episode_state_action(payload){
    return{
        type:UPDATE_ONE_EPISODE_STATE,
        payload:payload
    }
}
export function update_one_location_state_action(payload){
    return{
        type:UPDATE_ONE_LOCATION_STATE,
        payload:payload
    }
}
export function set_one_lc_action(payload){
    return{
        type:SET_ONE_LC,
        payload:payload
    }
}