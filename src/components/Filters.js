import React, { Component } from 'react';

import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../helpers/actions/const';
import { Paper, Tab, Tabs, Grid } from '@material-ui/core';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  render() {
    return (
      /*<Tabs
        onChange={this.handleChange}
        value={this.state.value}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab 
          onClick={this.showAll}
          label="Все"
        />
        <Tab 
          onClick={this.showActive}
          label="Без метки"
        />
        <Tab 
          onClick={this.showCompleted}
          label="С меткой"
        />
      </Tabs>
      */
      <Grid 
        container 
        direction="row"
        className="text-center"
      >
        <Grid item sm={4} xs={12} className="d-inline-block">
          <Tab 
            onClick={this.showAll}
            className={this.props.className}
            label="Все"
          />
        </Grid>
        <Grid item sm={4} xs={12} className="d-inline-block">
          <Tab 
            onClick={this.showActive}
            className={this.props.className}
            label="Без метки"
          />
        </Grid>
        <Grid item sm={4} xs={12} className="d-inline-block">
          <Tab 
            onClick={this.showCompleted}
            className={this.props.className}
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