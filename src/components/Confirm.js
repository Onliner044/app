import React from 'react';
import ReactDOM from 'react-dom';

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
            <div className="row">
              <div className="d-inline-block col-6">
                <input 
                  className="button btn btn-danger"
                  type="button"
                  onClick={okCallback}
                  defaultValue={applyText}
                />
              </div>
              <div className="d-inline-block col-6">
                <input 
                  className="button btn btn-lg"
                  onClick={cancelCallback}
                  type="button"
                  defaultValue={rejectText}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>,
      document.body
    )
  )
}

export default Confirm;