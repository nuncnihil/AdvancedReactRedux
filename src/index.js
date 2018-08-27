import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore); //this is the STORE!!
const store = createStore(reducers,applyMiddleware(reduxPromise));
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
            <Route path='/' component={App}/>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
