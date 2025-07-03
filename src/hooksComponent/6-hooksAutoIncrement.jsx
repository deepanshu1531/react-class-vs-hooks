import React from 'react';

function HooksAutoIncrement() {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <h2>{count}</h2>
            <p>{count}</p>
            <button className='btn' onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
export default HooksAutoIncrement