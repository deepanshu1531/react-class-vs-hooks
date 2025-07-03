import React from 'react';
import { dataContext } from '../11-classReducerContext';

class D extends React.Component {

  render() {
    const data = dataContext;
    return (
      <div>
        <dataContext.Consumer>
          {data => (
            <div>
              <input
                type="text"
                placeholder='Enter your name'
                onChange={e => data.dispatch({ type: 'SET_NAME', payload: e.target.value })}
                value={data.state.name}
              />
              <p>{data.state.name}</p>
            </div>
          )}
        </dataContext.Consumer>
      </div>
    )
  }
}
export default D;