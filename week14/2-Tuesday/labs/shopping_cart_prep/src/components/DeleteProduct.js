import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteProduct} from '../actions/cartActions';

class DeleteProduct extends Component {

    //pros Prroduct
  render() {
    return (
      <>
        <button onClick={()=>this.props.onDelete(this.props.product)}>X</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onDelete: product => dispatch(deleteProduct(product))
    }
}
export default  connect(null, mapDispatchToProps)(DeleteProduct);
