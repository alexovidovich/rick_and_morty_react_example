import Home from './home'
import React from "react";
import Characters from './characters/characters'
import Episode from './episodes/episode'
import Location from './locations/location'
import Episodes from './episodes/episodes'
import Character from './characters/character'
import Locations from './locations/locations'
import Preloader from '../utils/preloader'
import Start from './start'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import ScrollToTop from './scroll'
function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <div>
        <Switch>

          <Route exact path="/"key='1'exact render= {routeProps =><Episodes  {...routeProps}key={document.location.href}/>}>
            <Start />
          </Route>

          <Route exact path="/loader"key="/loader"exact render= {routeProps =><Episodes  {...routeProps}key={document.location.href}/>}>
            <Preloader />
          </Route>

          <Route exact path="/menu"key="/menu"exact render= {routeProps =><Episodes  {...routeProps}key={document.location.href}/>}>
            <Home />
          </Route>

          <Route exact path="/episodes" key="/episodes" exact render= {routeProps =><Episodes  {...routeProps}key={document.location.href}/>}>
          
          </Route>
          <Route path="/episode/:id"key ="/episode/id" exact render= {routeProps =><Episode {...routeProps} key={document.location.href}/>}> 
          </Route>

          <Route exact path="/locations" key="/locations" exact render= {routeProps =><Episodes  {...routeProps}key={document.location.href}/>}>
            <Locations />
          </Route>

          <Route path="/location/:id" key ='/location/id'exact render= {routeProps =><Episodes  {...routeProps}key={document.location.href}/>}>
            <Location />
          </Route>

          <Route exact path="/characters" key ="/characters"exact render= {routeProps =><Episodes  {...routeProps}key={document.location.href}/>}>
            <Characters />
          </Route>

          <Route path="/character/:id"key ="/character/id"exact render= {routeProps =><Episodes  {...routeProps}key={document.location.href}/>}>
            <Character />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

let mapStateToProps = state => {
  return {
      state: state
  }
};
export default connect(mapStateToProps, null)(App)
