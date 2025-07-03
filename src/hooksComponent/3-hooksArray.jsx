import React from 'react';

function HooksArray() {

    const [items, setItems] = React.useState([]);

    const addItems = () => {
        const newItem = {
            id: items.length + 1,
            value: Math.floor(Math.random() * 100)
        };
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <>
            <button onClick={addItems}>Add a number</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.id}:&nbsp;{item.value}</li>
                ))}
            </ul>
        </>
    )
}
export default HooksArray