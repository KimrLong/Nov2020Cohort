import React, {Component} from 'react';
import {connect} from 'react-redux';

//HOC

export default (ChildComponent) =>{

    //component
    class ComposedComponent extends Component {
    //check to see if user is authenticated

        componentDidMount(){
            this.isAuthenticated();
        }

        componentDidUpdate(){
            this.isAuthenticated();
        }

    isAuthenticated = () =>{
        if(!this.props.auth){
            //redirect user back  to home page
            this.props.history.push('/'); //redirecting via react router
        }
    }
        render() {

            return <ChildComponent {...this.props}/>
            
        }
    }//class component

    const mapStateToProps = (state) => {
        return{
            auth: state.auth.authenticated
        }
    }

    return connect(mapStateToProps, null)(ComposedComponent)
}//inside of HOC