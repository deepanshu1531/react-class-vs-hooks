import React, { Component } from 'react'

class ClassAutoIncrement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <p>{this.state.count}</p>
                <button className='btn' onClick={() => this.setState({ count: 0 })}>Reset</button>
            </div>
        )
    }
}

export default ClassAutoIncrement