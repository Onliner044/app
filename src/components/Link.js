import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, setVisibilityFilter, className, todos }) => {
  const onClick = () => {
    setVisibilityFilter(todos)
  }
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

Link.defaultProps = {
  className: 'btn btn-light w-100'
}

export default Link
