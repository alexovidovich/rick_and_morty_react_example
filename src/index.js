import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import './static/index.scss';
import App from './routes/App';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools}from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import thunk from 'redux-thunk'
import 'regenerator-runtime/runtime'
 //////////////MAIN RENDER///////////////
// import 'bootstrap/dist/css/bootstrap.min.css';
let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...[thunk])))
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    {console.log('reloading')}

    <App />
  </Provider>,
  
  // </React.StrictMode>,
  document.getElementById('root')
);