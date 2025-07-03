import React, { useEffect } from 'react';

function HookTitleUpdate() {

    const [title, setTitle] = React.useState('Initial Title');
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (count === 0) {
            setTitle('Title Update');
        } else {
            setTitle(`By Hook: ${count}`);
        }
        document.title = title;
    })

    return (
        <>
            <button class="btn" onClick={() => setCount(prevCount => prevCount + 1)}>Click</button>
            <hr />
            <h4>{count}</h4>
        </>
    )
}
export default HookTitleUpdate