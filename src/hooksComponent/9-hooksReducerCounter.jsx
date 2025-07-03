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

function HooksReducerCounter() {

    const [count, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div>
            <h2>{count}</h2>
            <p>{count}</p>
            <button className='btn' onClick={() => dispatch('increment')}>Increment</button>&nbsp;
            <button className='btn' onClick={() => dispatch('decrement')}>Decrement</button>&nbsp;
            <button className='btn' onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}
export default HooksReducerCounter