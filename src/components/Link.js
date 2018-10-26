import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Tab } from '@material-ui/core';

const Link = ({
 children, setVisibilityFilter, className, todos 
}) => {
  const onClick = () => {
    setVisibilityFilter(todos);
  };
  return (
    <Tab
      onClick={onClick}
    >
      {children}
    </Tab>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
};

Link.defaultProps = {
  className: 'w-100',
};

export default Link;
