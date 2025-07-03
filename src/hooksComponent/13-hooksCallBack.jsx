import React, { useCallback } from 'react'
import Title from './childs_13/Title'
import Content from './childs_13/Content'
import Button from './childs_13/Button'

function HooksCallBack() {
    const [age, setAge] = React.useState(25);
    const [salary, setSalary] = React.useState(25000);

    React.useEffect(() => {
        console.log('Main component rendered');
    });

    const increaseAge = useCallback(() => {
        setAge(prevAge => (prevAge + 1));
    }, [age]);

    const increaseSalary = useCallback(() => {
        setSalary(prevSalary => (prevSalary + 1000));
    }, [salary]);

    return (
        <div>
            <Title value={'Example for useCallBack()'} />
            <Content value={age} />
            <Button action={increaseAge} />
            <Content value={salary} />
            <Button action={increaseSalary} />

        </div>
    )
}
export default HooksCallBack;