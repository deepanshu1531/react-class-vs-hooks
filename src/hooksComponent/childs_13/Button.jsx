import React from 'react';

function Button(props) {

    React.useEffect(() => {
        console.log('Button component rendered');
    });

    return (
        <button className='btn' onClick={props.action}>Increment</button>
    )
}
export default Button;