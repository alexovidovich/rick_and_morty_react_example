
import { getData } from '../../utils/func'
import {compose} from "redux"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import InfiniteScroll from 'react-infinite-scroll-component';
import EachCharacter from '../../utils/each_card/each_character'
import shlaami from 'rickmortyapi'
import { Link,withRouter} from 'react-router-dom'
import React from 'react'
import NavBar from "../../utils/navBar";
import { connect } from 'react-redux';
import Preloader from "../../utils/preloader";
import {get_init_characters_state_action,update_characters_state_action,update_loading_action} from '../../redux/actions'
function Characters(props) {
    //////////////PREPARE///////////////
  
  React.useEffect(() => {
    if (props.state.characters.results.length<=1){
      (async () => {
        // делаю запрос на получение всех персонажей(на первую страницу из 20 персонажей)
        let newData = await shlaami.getCharacter()
          props.dispatch(get_init_characters_state_action({ ...newData, info: { ...newData.info, hasMore: true } }))
      })()
    }
    
  }, [])

  console.log(props.state.characters)
 //////////////RENDER///////////////
  if (props.state.characters.results.length > 1) {
    return (
      <div className='C-Back'>
        <NavBar />


        <InfiniteScroll
          dataLength={props.state.characters.results.length} //This is important field to render the next data
          next={
            () => { getData(props.state.characters, props.dispatch,update_characters_state_action) }
          }
          hasMore={props.state.characters.info.hasMore}
          loader={<div></div>}
        >



          <ResponsiveMasonry columnsCountBreakPoints={{ 270: 1, 600: 2, 900: 3, 1200: 4 }}>
            <Masonry className='mainGrid'>
              {
                props.state.characters.results.map(each => {
                  return (
                    
                    <Link onClick={()=>{
                      props.dispatch(update_loading_action(true))
                    }} key={each.id} to={{ pathname: `/character/${each.id}` }}>
                      <EachCharacter image={each.image || each.newData?.image || " "} name={each.name || each.newData?.name || " "} gender={each.gender || each.newData?.gender || " "} species={each.species || each.newData?.species || " "} status={each.status || each.newData?.status || " "} url={each.url || each.newData?.url || " "}  >

                      </EachCharacter>
                    </Link>
                  )
                })
              }
            </Masonry>
          </ResponsiveMasonry>


          <div className='RealBottonStrip'></div>
        
        
        
        </InfiniteScroll>
      </div>
    );

  }
  return (
    <div>
      <NavBar />
      {/* <Preloader/> */}
    </div>
  );
}
let mapStateToProps = state => {
  return {
      state: state
  }
};
export default connect(mapStateToProps, null)(Characters)

