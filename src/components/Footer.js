import React, { Component } from 'react'
import FilterLink from '../containers/FilterLink'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../helpers/actions/const'

class Footer extends Component {
  constructor(props) {
    super(props);

    this.lastLi = undefined; 
  }

  render () {
    return (
      <ul 
        className="inline list-unstyled mt-3 mb-3 p-0"
        onClick={e => this.onClick(e)}
      >
        <li className={this.props.className}>
          <FilterLink filter={SHOW_ALL}>
            Все
          </FilterLink>
        </li>
        <li className={this.props.className}>
          <FilterLink filter={SHOW_ACTIVE}>
            Без метки
          </FilterLink>
        </li>
        <li className={this.props.className}>
          <FilterLink filter={SHOW_COMPLETED}>
            С меткой
          </FilterLink>
        </li>
      </ul>
    )
  }

  onClick = (e) => {
    if (this.lastLi) {
      this.lastLi.classList.remove('selected')
    }
    
    this.lastLi = e.target;
    this.lastLi.classList.add('selected')
  }
}

Footer.defaultProps = {
  className: 'col-4 m-0 p-0'
}

export default Footer
