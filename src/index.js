import 'core-js/es6/set';
import 'core-js/es6/map';
import 'raf/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core/styles';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducer from './helpers/reducers/index';
import App from './App';

const saga = createSagaMiddleware();
const store = createStore(reducer, {}, applyMiddleware(logger, saga));
window.store = store;

store.injectedSagas = {};
store.runSaga = saga.run;

const root = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)