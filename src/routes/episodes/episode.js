import { multirequests,findObj,get_characters} from "../../utils/func";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import EachCharacter from "../../utils/each_card/each_character";
import shlaami from "rickmortyapi";
import React from "react";
import NavBar from "../../utils/navBar";
import Preloader from "../../utils/preloader";
import { useParams, Link, withRouter,useLocation} from "react-router-dom";
import { connect } from 'react-redux';
import { update_one_episode_state_action,update_loading_action,set_one_ep_action} from '../../redux/actions'
import {compose} from 'redux'
function Episode(props) {
    //////////////PREPARE///////////////
  let actions = { update_one_episode_state_action, update_loading_action }
  let { id } = useParams();
  React.useEffect(() => {
    let found = findObj(props, id,'episodes')
    if (found) {
      if (found.changed) {
        props.dispatch(set_one_ep_action(found))
        if(props.state.loading){
          props.dispatch(update_loading_action(false))
        }
      }
      else {
     
        props.dispatch(update_loading_action(true))
        get_characters(found,found.characters, multirequests, props, actions,'update_one_episode_state_action')
      }
    }
    else {
  
      props.dispatch(update_loading_action(true))
      shlaami.getEpisode(Number(id)).then(newData => {
        get_characters(newData,newData.characters, multirequests, props, actions,'update_one_episode_state_action')
      })
    }
  }, [])
 
 
 //////////////RENDER///////////////
  if (!props.state.loading) {
    return (
      <div className="C-Back">
        <NavBar/>


        <ResponsiveMasonry columnsCountBreakPoints={{ 270: 1, 600: 2, 900: 3, 1200: 4 }}>
          <Masonry className="mainGrid">
            {props.state.episodes.one.list.map((each) => {
              return (
                
                <Link onClick={()=>{ props.dispatch(update_loading_action(true))}}  key={each.data?.id } to={{ pathname: `/character/${each.data?.id || ''}` }}>
                  <EachCharacter
                    image={each.data?.image ||" "}
                    name={each.data?.name ||" "} 
                    gender={each.data?.gender ||" "}
                    species={each.data?.species ||" "}
                    status={each.data?.status ||" " }
                    url={each.data?.url ||" "}
                  />
                </Link>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>



        <div className="RealBottonStrip"></div>
        <div className="RealBottonStrip"></div>
      </div>
    );
  }
  return (
    <div>
      <NavBar/>
      <Preloader/>
    </div>
  );
}

let mapStateToProps = state => {
  return {
      state: state
  }
};
export default connect(mapStateToProps, null)(Episode)

