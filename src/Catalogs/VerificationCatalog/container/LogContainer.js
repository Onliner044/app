import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Log } from '../components/Log';
import { visibleUserPanel } from '../actions/actions';

export const LogContainer = connect(
  (state) => {
    return {

    }
  }, 
  (dispatch) => {
    return {
      showUserPanel: () => dispatch(visibleUserPanel(false))
    }
  }
)(Log);