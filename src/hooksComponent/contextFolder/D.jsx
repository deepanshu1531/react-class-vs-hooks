import React from 'react';
import { dataContext } from '../11-hooksReducerContext';

function D() {

    const data = React.useContext(dataContext);

    return (
        <div>
            <input type="text" placeholder='Enter your name' onChange={e => data.dispatch({ type: 'SET_NAME', payload: e.target.value })} value={data.state.name} />
            <p>{data.state.name}</p>
        </div>
    )
}
export default D;