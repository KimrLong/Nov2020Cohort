import React, { Component } from 'react'

class ErrorBoundaries extends Component {

    constructor() {
        super();

        this.state = {
            error: false
        }
    }

    //lifesycle method is static

    static getDerivedStateFromError(error){
        return{error: true}
    }


  render() {

    if(this.state.error){
        return (
            <div>
                <h1>Whoops...error</h1>
            </div>
        )

    }
    return this.props.children


  }
}

export default ErrorBoundaries;
