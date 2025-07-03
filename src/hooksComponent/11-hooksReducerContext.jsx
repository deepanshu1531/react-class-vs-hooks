import React from 'react';
import A from './contextFolder/A';
import B from './contextFolder/B';
import C from './contextFolder/C';

const initialValue = {
  name: '',
  channel: ''
}

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

function HooksReducerContext() {

  const [state, dispatch] = React.useReducer(reducer, initialValue);

  return (
    <div>
      <A />
      <dataContext.Provider value={{ state: state, dispatch: dispatch }}>
        <B />
        <C />
      </dataContext.Provider>
    </div>
  )
}
export default HooksReducerContext;