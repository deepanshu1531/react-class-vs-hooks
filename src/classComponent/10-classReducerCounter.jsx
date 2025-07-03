import React from 'react';

const initialState = {
    firstCount: 0,
    secondCount: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value };
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value };
        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value };
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value };
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
            return { ...state, firstCount: state.firstCount + action.value };
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value };
        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value };
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value };
        case 'reset':
            return { ...state, firstCount: initialState.firstCount };
        case 'reset2':
            return { ...state, secondCount: initialState.secondCount };
        default:
            return state;
    }
};

class ClassReducerCounter2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: initialState,
            countTwo: initialState
        };
        this.dispatch = this.dispatch.bind(this);
    }

    dispatch(action) {
        this.setState(prevState => ({
            count: reducer(prevState.count, action)
        }));
    }

    dispatchTwo(action) {
        this.setState(prevState => ({
            countTwo: reducer2(prevState.countTwo, action)
        }));
    }

    render() {
        return (
            <>
                <div className='row'>
                    <div className='col'>
                        <h4>First Counter</h4>
                        <h2>{this.state.count.firstCount}</h2>
                        <p>{this.state.count.firstCount}</p>
                        <button className='btn' onClick={() => this.dispatch({ type: 'increment', value: 1 })}>Inc-01</button>&nbsp;
                        <button className='btn' onClick={() => this.dispatch({ type: 'decrement', value: 1 })}>Dec-01</button>&nbsp;
                        <button className='btn' onClick={() => this.dispatch({ type: 'reset' })}>Reset</button>
                    </div>
                    <div className='col'>
                        <h4>Second Counter</h4>
                        <h2>{this.state.count.secondCount}</h2>
                        <p>{this.state.count.secondCount}</p>
                        <button className='btn' onClick={() => this.dispatch({ type: 'increment2', value: 10 })}>Inc-10</button>&nbsp;
                        <button className='btn' onClick={() => this.dispatch({ type: 'decrement2', value: 10 })}>Dec-10</button>&nbsp;
                        <button className='btn' onClick={() => this.dispatch({ type: 'reset2' })}>Reset</button>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col'>
                        <h4>Third Counter</h4>
                        <h2>{this.state.countTwo.firstCount}</h2>
                        <p>{this.state.countTwo.firstCount}</p>
                        <button className='btn' onClick={() => this.dispatchTwo({ type: 'increment', value: 100 })}>Inc-100</button>&nbsp;
                        <button className='btn' onClick={() => this.dispatchTwo({ type: 'decrement', value: 100 })}>Dec-100</button>&nbsp;
                        <button className='btn' onClick={() => this.dispatchTwo({ type: 'reset' })}>Reset</button>
                    </div>
                    <div className='col'>
                        <h4>Fourth Counter</h4>
                        <h2>{this.state.countTwo.secondCount}</h2>
                        <p>{this.state.countTwo.secondCount}</p>
                        <button className='btn' onClick={() => this.dispatchTwo({ type: 'increment2', value: 1000 })}>Inc-1000</button>&nbsp;
                        <button className='btn' onClick={() => this.dispatchTwo({ type: 'decrement2', value: 1000 })}>Dec-1000</button>&nbsp;
                        <button className='btn' onClick={() => this.dispatchTwo({ type: 'reset2' })}>Reset</button>
                    </div>
                </div>
            </>
        );
    }
}

export default ClassReducerCounter2;