import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      points: '.',
    };
    this.text = 'Loading';
    this.isAnimated = true;
  }

  render() {
    return (
      ReactDOM.createPortal(
        <div className="loadingDiv">
          <div className="d-table w-100 h-100">
            <span className="d-table-cell center">
              {`${this.text}${this.state.points}`}
            </span>
          </div>
        </div>,
        document.body,
      )
    );
  }

  animateText = () => {
    if (!this.isAnimated) {
      return;
    }

    if (this.state.points.length <= 3) {
      this.setState((state) => ({
        points: `${state.points}.`
      }))
    } else {
      this.setState({
        points: '.'
      });
    }

    setTimeout(this.animateText, 500)
  }

  componentDidMount() {
    this.animateText();
  }

  componentWillUnmount() {
    this.isAnimated = false;
  }
}

export default Loading;
