import React, { Component } from 'react'

export class ClassCustomHooks extends Component {

  constructor(props) {
    super(props)
    this.state = {
      docTitle: 'Class Custom Hooks',
    }
  }

  componentDidMount() {
    document.title = this.state.docTitle
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.docTitle !== this.state.docTitle) {
      document.title = this.state.docTitle
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.docTitle}</p>
        <input type="text" value={this.state.docTitle} onChange={e => (this.setState({ docTitle: e.target.value }))} />
      </div>
    )
  }
}

export default ClassCustomHooks