import React, { Component } from 'react'

export class ClassDataFetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            this.setState({ data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(item => (
                        <li key={item.id}>
                            <h5>{item.title}</h5>
                            <p>Status: {item.completed ? 'Completed' : 'Not Completed'}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ClassDataFetch