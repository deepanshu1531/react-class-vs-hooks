import React, { Component } from 'react'

class ClassArray extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    addItem = () => {
        const newItem = {
            id: this.state.items.length + 1,
            value: Math.floor(Math.random() * 100)
        }
        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }))
    }

    render() {
        return (
            <>
                <button onClick={this.addItem}>Add a number</button>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item.id}:&nbsp;{item.value}</li>
                    ))}
                </ul>
            </>
        )
    }
}

export default ClassArray