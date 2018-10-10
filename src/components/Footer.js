import React from 'react'
import FilterLink from '../containers/FilterLink'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../helpers/actions/const';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Footer