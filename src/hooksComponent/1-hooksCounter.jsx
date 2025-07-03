import React from 'react';

function HooksCounter() {

    const [count, setCount] = React.useState(0);

    return (
        <>
            <h2>count: {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase: {count}</button>&nbsp;
            <button onClick={() => setCount(0)}>Reset: {count}</button>&nbsp;
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease: {count}</button>
        </>
    )
}

export default HooksCounter;