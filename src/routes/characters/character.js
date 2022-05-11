import React from "react";
import { compose } from "redux"
import { useParams, withRouter } from "react-router-dom";
import shlaami from "rickmortyapi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import { multirequests, findObj, get_location_and_episodes } from "../../utils/func";
import NavBar from "../../utils/navBar";
import Preloader from "../../utils/preloader";
import EachEpisode from "../../utils/each_card/each_episode";
import { connect } from 'react-redux';
import { update_one_character_state_action, update_loading_action, set_one_ch_action } from '../../redux/actions'



function Character(props) {
  //////////////PREPARE///////////////
  let actions = { update_one_character_state_action, update_loading_action }
  let { id } = useParams();
  React.useEffect(() => {
    let found = findObj(props, id,'characters')
    if (found) {
  
      if (found.changed) {
        props.dispatch(set_one_ch_action(found))
        if(props.state.loading){
          props.dispatch(update_loading_action(false))
        }
      }
      else {
        props.dispatch(update_loading_action(true))
        get_location_and_episodes(found, multirequests, props, actions)
      }
    }
    else {
      props.dispatch(update_loading_action(true))
      shlaami.getCharacter(Number(id)).then(newData => {
        get_location_and_episodes(newData, multirequests, props, actions)
      })
    }
  }, [])




  

  //////////////RENDER///////////////

  if (!props.state.loading ) {
    return (
      <div className="C-Back">
        <NavBar />
        <div className="wrapper">
          <div className="mainC-card">







            <div className="COne-Back">
              <img src={props.state.characters.one.newData.image} height="680px"></img>
            </div>







            <div className="C-P">
              <div className="char_d">

                <h3>{props.state.characters.one.newData.name}</h3>
                <h4>{props.state.characters.one.newData.gender}</h4>
                <h4>{props.state.characters.one.newData.status}</h4>
              </div>
              {(() => {
                if (props.state.characters.one.lk) {
                  return (
                    <Link onClick={()=>{ props.dispatch(update_loading_action(true))}} to={{ pathname: `/location/${props.state.characters.one.lk.id}` }}>
                      <div className="LK">
                        <h1>{props.state.characters.one.lk.name}</h1>
                        <h3>Type: {props.state.characters.one.lk.type}</h3>
                        <h3>Dimension: {props.state.characters.one.lk.dimension}</h3>
                      </div>
                    </Link>
                  )
                }
              })()}
            <div className="EP">
              <ResponsiveMasonry columnsCountBreakPoints={{ 0: 2 }}>
                <Masonry className="innergap">
                  {props.state.characters.one.list.map((each) => {
                    return (
                      <div className="oneEP" key={each.data.id}>
                        <Link onClick={()=>{ props.dispatch(update_loading_action(true))}} to={{ pathname: `/episode/${each.data?.id || ''}` }}>
                          <EachEpisode
                            char={true}
                            name={each.data?.name ||" "}
                            time={each.data?.air_date ||" "}
                            episode={each.data?.episode ||" "}
                          ></EachEpisode>
                        </Link>
                      </div>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            </div>












          </div>
        </div>



 
        <div className="RealBottonStrip"></div>
      </div>
    );
  } else {
    return (
      <div className="C-Back">
        <NavBar />
        <Preloader></Preloader>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    state: state
  }
};
export default connect(mapStateToProps, null)(Character)

