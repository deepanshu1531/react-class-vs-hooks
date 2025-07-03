import React, { Component } from 'react'

export class ClassNameObj extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: {
                firstName: '',
                lastName: ''
            }
        }
    }

    handleFirstNameChange = (e) => {
        this.setState(prevState => ({
            name: {
                ...prevState.name,
                firstName: e.target.value
            }
        }))
    }

    handleLastNameChange = (e) => {
        this.setState(prevState => ({
            name: {
                ...prevState.name,
                lastName: e.target.value
            }
        }));
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.name.firstName} onChange={this.handleFirstNameChange} placeholder='FirstName' />&nbsp;
                <input type="text" value={this.state.name.lastName} onChange={this.handleLastNameChange} placeholder='LastName' />
                <h5>{this.state.name.firstName} &nbsp; {this.state.name.lastName}</h5>
            </>
        )
    }
}

export default ClassNameObj;