import React, { Component } from 'react'

export class ClassMouseMove extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }
    
    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove)
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return (
            <div>
                <h2>Mouse X: {this.state.x}</h2>
                <h2>Mouse Y: {this.state.y}</h2>
                <p>Move your mouse around!</p>
            </div>
        )
    }
}

export default ClassMouseMove