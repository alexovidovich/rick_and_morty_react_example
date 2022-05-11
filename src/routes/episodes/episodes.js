import { Link,withRouter, useLocation} from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import EachEpisode from "../../utils/each_card/each_episode";
import shlaami from "rickmortyapi";

import React from "react";
import { getData } from "../../utils/func";
import NavBar from "../../utils/navBar";
import Preloader from "../../utils/preloader";
import { connect } from 'react-redux';
import {compose} from 'redux'
import {get_init_episodes_state_action,update_episodes_state_action,update_loading_action} from '../../redux/actions'
function Episodes(props) {
    //////////////PREPARE///////////////
   // делаю запрос на получение всех эпизодов (на первую страницу из 20 эпизодов)
   
   React.useEffect(() => {
    if (props.state.episodes.results.length<=1){
      (async () => {
        // делаю запрос на получение всех персонажей(на первую страницу из 20 персонажей)
        let newData = await shlaami.getEpisode()
        props.dispatch(get_init_episodes_state_action({ ...newData, info: { ...newData.info, hasMore: true } }))
      })()
    }
    
  }, [])
 //////////////RENDER///////////////
  if (props.state.episodes.results.length > 1){
    return (
      <div className="e-back">
        <NavBar></NavBar>
        <InfiniteScroll
          dataLength={props.state.episodes.results.length} //This is important field to render the next data
          next={() => {
            getData(props.state.episodes, props.dispatch,update_episodes_state_action);
          }}
          hasMore={props.state.episodes.info.hasMore}
          loader={<div></div>}
        >




          <ResponsiveMasonry columnsCountBreakPoints={{ 270: 1, 600: 2, 900: 3, 1200: 4 }}>
            <Masonry className="mainGrid">
              {props.state.episodes.results.map((each) => {
              
                return (
                  <Link onClick={()=>{ props.dispatch(update_loading_action(true))}}  key={each.id} to={{ pathname: `/episode/${each.id}` }}>
                    <EachEpisode
                      time={each.air_date || each.newData?.air_date ||" "}
                      name={each.name || each.newData?.name ||" "}
                      episode={each.episode || each.newData?.episode ||" "}
                      key={each.id || each.newData?.id ||" "}
                      url={each.url || each.newData?.url ||" "}
                    ></EachEpisode>
                  </Link>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>

          <div className="RealBottonStrip"></div>





        </InfiniteScroll>
      </div>
    );
  }
  return (

    <div>
      <NavBar />
      {/* <Preloader /> */}
    </div>
  )
}
let mapStateToProps = state => {
  return {
      state: state
  }
};
export default connect(mapStateToProps, null)(Episodes)

