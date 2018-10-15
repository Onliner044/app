import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import reducer from './helpers/reducers/index'
import App from './App'

var store = createStore(reducer)            
const root = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
