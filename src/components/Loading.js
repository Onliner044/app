import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            points: '.'
        }
        this.text = 'Loading';
        this.isAnimated = true; 
    }

    render() {
        return (
            ReactDOM.createPortal(
                <div className="loadingDiv">
                    <span>
                        {`${this.text}${this.state.points}`}
                    </span>
                </div>,
                document.body
            )
        );      
    }

    animated = () => {
        if (!this.isAnimated) {
            return;
        }

        if (this.state.points.length <= 3) {
            this.setState({
                points: `${this.state.points}.`
            });
        } else {
            this.setState({
                points: '.'
            });
        }

        setTimeout(this.animated, 500);
    }

    componentDidMount() {
        this.animated();
    }

    componentWillUnmount() {
        this.isAnimated = false;
    }
}

export default Loading;