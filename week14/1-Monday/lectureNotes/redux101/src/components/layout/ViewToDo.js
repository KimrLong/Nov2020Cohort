import React, { Component } from "react";
import {connect} from 'react-redux';


class ViewToDo extends Component {
    render() {
        return <>
            HOLDER

        <h1>{this.props.list}</h1>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.list
    }
}



export default connect(mapStateToProps, null)(ViewToDo);