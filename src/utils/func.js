import axios from 'axios'
import { act } from 'react-dom/test-utils'


export function getData(data, dispatch,action) {
    fetch(data.info.next).then(data => data.json()).then(newData => {
      if (newData.info.next) {
        newData.info.hasMore = true
      }
      else { newData.info.hasMore = false }
      dispatch(action({ ...newData }))
      
    })
  }



export function multirequests(links, dispatch,actions,args) {

  return new Promise(resolve => {
    let prep= []
    for (let link of links) {
      prep.push(axios.get(link)) 
    }
    axios
    .all(prep)
    .then(
      axios.spread((...responses) => {
        if (dispatch) {
          let main = {list:[...responses]}
          let go = Object.assign({},main,...args)
          ///go = {list:[...responses],'newData':newData,'lk':lk}
          dispatch(actions[0](go))
          dispatch(actions[1](false))
          
        }
      })
    )
    .catch((errors) => {
      console.error(errors);
    })
      }
    )
    
    
    
}
export let findObj = (props,id,what_to_find)=>{
  
  let from_all = props.state[what_to_find].results.find(episode=>episode.id==id)
  
  return from_all
}




export let get_characters = (newData,who,multirequests,props,actions,main_action)=>{
  
  multirequests(who,props.dispatch,[actions[main_action],actions.update_loading_action],[{'newData':newData}])
}
export let get_location_and_episodes = (newData,multirequests,props,actions)=>{
  fetch(newData.location.url).then(lk=>{
    return newData.location.url? lk.json():null}
    ).then(lk=>{
    multirequests(newData.episode,props.dispatch,[actions.update_one_character_state_action,actions.update_loading_action],[{'lk':lk},{'newData':newData}])
  }
  )
}