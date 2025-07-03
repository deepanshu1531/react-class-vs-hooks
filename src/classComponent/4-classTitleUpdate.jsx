import React, { Component } from 'react'

class ClassTitleUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Title Update',
            count: 0
        }
    }

    componentDidMount() {
        document.title = this.state.title;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            document.title = `By Class: ${this.state.count}`;  
        }
    }

    buttonClicked = () => {
       this.setState(prevState => (
            {
                count: prevState.count + 1,
            }
        ));
    }

    render() {
        return (
            <>
                <button className='btn' onClick={this.buttonClicked}>Click</button>
                <hr/>
                <h4>{this.state.count}</h4>
            </>
        )
    }
}

export default ClassTitleUpdate;