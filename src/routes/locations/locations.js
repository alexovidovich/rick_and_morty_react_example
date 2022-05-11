
import {getData} from '../../utils/func'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import InfiniteScroll from 'react-infinite-scroll-component';
import EachLocation from '../../utils/each_card/each_location'
import NavBar from '../../utils/navBar'
import shlaami from 'rickmortyapi'
import Preloader from "../../utils/preloader";
import {
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import React from 'react'
import {get_init_locations_state_action,update_locations_state_action,update_loading_action} from '../../redux/actions'
function Locations(props) {
    //////////////PREPARE///////////////
    React.useEffect(() => {
      if (props.state.locations.results.length==0){
        (async () => {
          // делаю запрос на получение всех персонажей(на первую страницу из 20 персонажей)
          let newData = await shlaami.getLocation()
          props.dispatch(get_init_locations_state_action({ ...newData, info: { ...newData.info, hasMore: true } }))
        })()
      }
      
    }, [])
  
    console.log(props.state.locations.results,props.state.locations.info,)
    
  //////////////RENDER///////////////
  if (props.state.locations.results.length > 1) {
    return (
      <div className= 'SP'>
        <NavBar>

        </NavBar>
        <InfiniteScroll
          dataLength={props.state.locations.results.length} //This is important field to render the next data
          next={ ()=> {getData (props.state.locations, props.dispatch,update_locations_state_action)}}
          hasMore={props.state.locations.info.hasMore}
          loader={<div></div>}

        >
         <ResponsiveMasonry
        columnsCountBreakPoints={{270: 1, 600: 2, 900: 3, 1200: 4}}
        >
          
            <Masonry className= 'mainGrid'>
            {

              props.state.locations.results.map(each => {
                each.type=''
                return (
                  <Link onClick={()=>{ props.dispatch(update_loading_action(true))}}  key= {each.id } to={{pathname: `/location/${each.id}`}}>
                  <EachLocation type={each.type || each.newData?.type || " " } dimension={each.dimension ||each.newData?.dimension || " "} residents={each.residents||each.newData?.residents} name={each.name||each.newData?.name}  >

                  </EachLocation>

                  </Link>
                )
              })
            }
            </Masonry>
          

        </ResponsiveMasonry>
        <div className= 'RealBottonStrip'>

        </div>
        </InfiniteScroll>
      </div>
    );

  }
  return (
    <div>
      <NavBar/>
      {/* <Preloader/> */}
    </div>
  );
}



  
let mapStateToProps = state => {
  return {
      state: state
  }
};
export default connect(mapStateToProps, null)(Locations)
