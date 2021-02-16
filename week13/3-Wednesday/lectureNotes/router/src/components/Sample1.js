import React, { Component } from 'react';

class Sample1 extends Component {

    constructor(props) {
        
        super();

        this.history = props.history;
        }
        
    

    componentDidMount(){
        this.history.push('/')
    }


    handleClick = () =>{
        console.log('inside handle click');
        this.history.push("/");
    }
  render() {
    return 
      <>
        Sample1
        <button onClick={this.handleClick}>ClickyMEH!</button>
      </>;
    
  }
}

export default Sample1;
