import React from 'react'

function Content(props) {

    React.useEffect(() => {
        console.log('Content component rendered');
    });

    return (
        <div>{props.value}</div>
    )
}
export default Content;