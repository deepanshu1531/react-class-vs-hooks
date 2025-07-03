import React from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    data: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                data: action.payload
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went wrong!',
                data: []
            };
        default:
            return state;
    }
}

function HooksReducerDataFetch() {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            };
            fetchData();
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR' });
        }
    });

    return (
        <div>
            {state.loading ? (
                <p>Loading...</p>
            ) : state.error ? (
                <p>{state.error}</p>
            ) : (
                <ul>
                    {state.data.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>

                    ))}
                </ul>
            )}
        </div>
    )
}
export default HooksReducerDataFetch