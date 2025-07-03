import React from 'react';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    decrement = () => {
        this.setState(prevState => ({count: prevState.count - 1}));
    }

    reset = () => {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div>
                <h2>count: {this.state.count}</h2>
                <button onClick={this.increment}>Increase: {this.state.count}</button>&nbsp;
                <button onClick={this.reset}>Reset: {this.state.count}</button>&nbsp;
                <button onClick={this.decrement}>Decrease: {this.state.count}</button>
            </div>
        );
    }
}

export default ClassCounter;
