import React from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

class ClassReducerCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: initialState
        };
        this.dispatch = this.dispatch.bind(this);
    }

    dispatch(action) {
        this.setState(prevState => ({
            count: reducer(prevState.count, action)
        }));
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <p>{this.state.count}</p>
                <button className='btn' onClick={() => this.dispatch('increment')}>Increment</button>&nbsp;
                <button className='btn' onClick={() => this.dispatch('decrement')}>Decrement</button>&nbsp;
                <button className='btn' onClick={() => this.dispatch('reset')}>Reset</button>
            </div>
        );
    }
}

export default ClassReducerCounter;