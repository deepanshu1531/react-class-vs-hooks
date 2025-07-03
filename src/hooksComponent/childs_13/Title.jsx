import React from 'react'

function Title(props) {

    React.useEffect(() => {
        console.log('Title component rendered');
    });

    return (
        <div>{props.value}</div>
    )
}
export default Title;