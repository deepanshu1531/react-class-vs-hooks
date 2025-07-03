import React from 'react'
import axios from 'axios';

function HooksDataFetch() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [data]); 

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <h5>{item.name}</h5>
                        <p>{item.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default HooksDataFetch