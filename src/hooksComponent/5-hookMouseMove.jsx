import React from 'react';

function HookMouseMove() {

    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);

    const handleMouseMove = (event) => {
        setX(event.clientX);
        setY(event.clientY);
    }

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div>
            <h2>Mouse X: {x}</h2>
            <h2>Mouse Y: {y}</h2>
            <p>Move your mouse around!</p>
        </div>
    )
}

export default HookMouseMove