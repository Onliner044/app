import React, { Component } from 'react';

export class Dropdown extends Component {
  constructor(props) {
      super(props);

      this.state = {
          isShow: false
      }
  }

  render() {
    return (
        <div>
            <input
              onClick={this.onClick} 
              type="button"
              defaultValue={`${this.props.text}${this.state.isShow ? 
                this.props.textShow : this.props.textHide}`}
            />
            <ul className="list-unstyled">
                {this.state.isShow ?
                this.props.children.map ?
                    this.props.children.map(el => 
                        <li>
                            {el}
                        </li> 
                    ) :
                    <li>{this.props.children}</li> : 
                null}
            </ul>
        </div>
    )
  }

  onClick = () => {
      this.setState({
          isShow: !this.state.isShow
      });
  }
}

export default Dropdown