import React from 'react';

function HooksUseRef() {

    const [count, setCount] = React.useState(0);
    const intervalId = React.useRef(null);

    React.useEffect(() => {
        intervalId.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId.current);
        }
    },[count])

    return (
        <div>
            <h4>{count}</h4>
            <p>{count}</p>
            <button className='btn' onClick={() => clearInterval(intervalId.current)}>Clear Interval</button>
        </div>
    )
}
export default HooksUseRef