import React from 'react';
import A from './contextFolder/A';
import B from './contextFolder/B';
import C from './contextFolder/C';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_CHANNEL':
            return { ...state, channel: action.payload };
        default:
            return state;
    }
}

export const dataContext = React.createContext();

class ClassReducerContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            channel: ''
        }
    }

    dispatch = (action) => {
        this.setState((prevState) => reducer(prevState, action));
    }

    render() {
        return (
            <div>
                <A />
                <dataContext.Provider value={{ state: this.state, dispatch: this.dispatch }}>
                    <B />
                    <C />
                </dataContext.Provider>
            </div>
        )
    }
}
export default ClassReducerContext;