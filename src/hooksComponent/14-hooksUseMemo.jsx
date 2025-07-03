import React from 'react';

function HooksUseMemo() {

    const[countre1, setCountre1] = React.useState(0);
    const[countre2, setCountre2] = React.useState(0);

    const increment1 = () => {
        setCountre1(countre1 + 1);
    }

    const increment2 = () => {
        setCountre2(countre2 + 1);
    }

    const isEven = React.useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i++;
        }
        return countre1 % 2 === 0;
    }, [countre1]);

    const isEven2 = () => {
        return countre2 % 2 === 0;
    };

  return (
    <div>
        <p>Count 1: {countre1}</p>
        <button className='btn' onClick={increment1}>Increment Count 1</button>
        <p>{countre1} is {isEven ? 'Even' : 'Odd'}</p>
        <hr />
        <p>Count 2: {countre2}</p>
        <button className='btn' onClick={increment2}>Increment Count 2</button>
        <p>{countre2} is {isEven2 ? 'Even' : 'Odd'}</p>
        <hr />
    </div>
  )
}
export default HooksUseMemo