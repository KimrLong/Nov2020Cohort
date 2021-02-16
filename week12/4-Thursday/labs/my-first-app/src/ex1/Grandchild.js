import React, { Component } from 'react'

class Grandchild extends Component {
  render() {
    return (
      <>
        I am a grandchils and my name is {this.props.name}
      </>
    )
  }
}

export default Grandchild
