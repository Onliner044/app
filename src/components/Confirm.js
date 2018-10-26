import React from 'react';
import ReactDOM from 'react-dom';

import { Grid } from '@material-ui/core';
import '../styles/confirmStyle.css';

const Confirm = ({ info, applyText, rejectText, okCallback, cancelCallback }) => {
  return (
    ReactDOM.createPortal(
      <div className="d-table full maxzIndex dark">
        <div className="d-table-cell align-middle text-center">
          <div className="confirm">
            <div className="header">
              {info}
            </div>
            <div className="bottom">
              <Grid container direction="row">
                <Grid item xs={6}>
                  <div className="d-inline-block">
                    <input 
                      className="button btn btn-danger"
                      type="button"
                      onClick={okCallback}
                      defaultValue={applyText}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="d-inline-block">
                    <input 
                      className="button btn btn-lg"
                      onClick={cancelCallback}
                      type="button"
                      defaultValue={rejectText}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  )
}

export default Confirm;