import React, { Component } from 'react';

import { Tab, Grid } from '@material-ui/core';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../helpers/actions/const';

class Filters extends Component {
  constructor(props) {
    super(props);

    const { className } = this.props;
    this.state = {
      value: 0
    }
  }

  render() {
    return (
      <Grid 
        container 
        direction="row"
        className="text-center"
      >
        <Grid item sm={4} xs={12} className="d-inline-block">
          <Tab 
            onClick={this.showAll}
            className={this.className}
            label="Все"
          />
        </Grid>
        <Grid item sm={4} xs={12} className="d-inline-block">
          <Tab 
            onClick={this.showActive}
            className={this.className}
            label="Без метки"
          />
        </Grid>
        <Grid item sm={4} xs={12} className="d-inline-block">
          <Tab 
            onClick={this.showCompleted}
            className={this.className}
            label="С меткой"
          />
        </Grid>
      </Grid>
    );
  }

  showAll = () => {
    this.props.setVisibilityFilter(SHOW_ALL);
  }
  showActive = () => {
    this.props.setVisibilityFilter(SHOW_ACTIVE);
  }
  showCompleted = () => {
    this.props.setVisibilityFilter(SHOW_COMPLETED);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }
}

Filters.defaultProps = {
  className: 'w-100',
};

export default Filters;