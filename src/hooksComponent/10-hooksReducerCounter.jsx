import React from 'react';

const initialState = {
    firstCount: 0,
    secondCount: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + 1 };
        case 'decrement':
            return { ...state, firstCount: state.firstCount - 1 };
        case 'increment2':
            return { ...state, secondCount: state.secondCount + 10 };
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - 10 };
        case 'reset':
            return { ...state, firstCount: initialState.firstCount };
        case 'reset2':
            return { ...state, secondCount: initialState.secondCount };
        default:
            return state;
    }
};

const reducer2 = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + 100 };
        case 'decrement':
            return { ...state, firstCount: state.firstCount - 100 };
        case 'increment2':
            return { ...state, secondCount: state.secondCount + 1000 };
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - 1000 };
        case 'reset':
            return { ...state, firstCount: initialState.firstCount };
        case 'reset2':
            return { ...state, secondCount: initialState.secondCount };
        default:
            return state;
    }
};

function HooksReducerCounter2() {

    const [count, dispatch] = React.useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = React.useReducer(reducer2, initialState);

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h4>First Counter</h4>
                    <h2>{count.firstCount}</h2>
                    <p>{count.firstCount}</p>
                    <button className='btn' onClick={() => dispatch({ type: 'increment' })}>Inc-1</button>&nbsp;
                    <button className='btn' onClick={() => dispatch({ type: 'decrement' })}>Dec-1</button>&nbsp;
                    <button className='btn' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                </div>
                <div className='col'>
                    <h4>Second Counter</h4>
                    <h2>{count.secondCount}</h2>
                    <p>{count.secondCount}</p>
                    <button className='btn' onClick={() => dispatch({ type: 'increment2' })}>Inc-10</button>&nbsp;
                    <button className='btn' onClick={() => dispatch({ type: 'decrement2' })}>Dec-10</button>&nbsp;
                    <button className='btn' onClick={() => dispatch({ type: 'reset2' })}>Reset</button>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col'>
                    <h4>Third Counter</h4>
                    <h2>{countTwo.firstCount}</h2>
                    <p>{countTwo.firstCount}</p>
                    <button className='btn' onClick={() => dispatchTwo({ type: 'increment' })}>Inc-100</button>&nbsp;
                    <button className='btn' onClick={() => dispatchTwo({ type: 'decrement' })}>Dec-100</button>&nbsp;
                    <button className='btn' onClick={() => dispatchTwo({ type: 'reset' })}>Reset</button>
                </div>
                <div className='col'>
                    <h4>Fourth Counter</h4>
                    <h2>{countTwo.secondCount}</h2>
                    <p>{countTwo.secondCount}</p>
                    <button className='btn' onClick={() => dispatchTwo({ type: 'increment2' })}>Inc-1000</button>&nbsp;
                    <button className='btn' onClick={() => dispatchTwo({ type: 'decrement2' })}>Dec-1000</button>&nbsp;
                    <button className='btn' onClick={() => dispatchTwo({ type: 'reset2' })}>Reset</button>
                </div>
            </div>
        </>
    )
}
export default HooksReducerCounter2;