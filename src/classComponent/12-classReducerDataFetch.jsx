import React, { Component } from 'react'
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

class ClassReducerDataFetch extends Component {


  constructor(props) {
    super(props);
    this.state = initialState;
    this.dispatch = this.dispatch.bind(this);
  }

  dispatch(action) {
    this.setState((prevState) => reducer(prevState, action));
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = await response.data;
      this.dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      this.dispatch({ type: 'FETCH_ERROR' });
    }
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : this.state.error ? (
          <p>{this.state.error}</p>
        ) : (
          <ul>
            {this.state.data.map(user => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default ClassReducerDataFetch