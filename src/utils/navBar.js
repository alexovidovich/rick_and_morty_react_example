import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import { update_loading_action } from '../redux/actions'
function NavBar(props) {
  const location = useLocation();
  return (
    <div>
      <div className="BlackTopStrip">
        <Link to= {{pathname: '/menu'}}>
          <FontAwesomeIcon icon={faBrain} className="ic"></FontAwesomeIcon>
        </Link>

        <div className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            {location.pathname.includes("characters") ? null : (
              <li>
                <Link 
                  id="len2"
                  className="hoverable"
                  to={{ pathname: "/characters" }}
                >
                  CHARACTERS
                </Link>
              </li>
            )}
            {location.pathname.includes("locations") ? null : (
              <li>
                <Link 
                  id="len3"
                  className="hoverable"
                  to={{ pathname: "/locations" }}
                >
                  LOCATIONS
                </Link>
              </li>
            )}
            {location.pathname.includes("episodes") ? null : (
              <li>
                <Link 
                  id="len4"
                  className="hoverable"
                  to={{ pathname: "/episodes" }}
                >
                  EPISODES
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="RealTopStrip"></div>
      <div className="BlackBottomStrip"></div>
    </div>
  );
}

let mapStateToProps = state => {
  return {
    state: state
  }
};
export default connect(mapStateToProps, null)(NavBar)