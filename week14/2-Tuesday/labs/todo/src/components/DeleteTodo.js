import React from 'react';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {Delete} from '../actions/todoActions';

const DeleteTodo = ({todoObj}) => {

    const dispatch = useDispatch();

    return (
        <>
        <button onClick={()=>dispatch(Delete(todoObj))}>X</button>
        </>
    )
}

export default DeleteTodo;
