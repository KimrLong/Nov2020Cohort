import React from 'react';
import AddTodo from './AddTodo';
import DeleteTodo from './DeleteTodo';
import {useSelector} from 'react-redux'

const Todo = () => {

    const todoList = useSelector(state => state.todos)
    return (
        <>
            <h1>Todo</h1>
            <AddTodo/>

            <ul>
                {todoList.map(i=>{
                    return <li key={i.id}>{i.todoObj} <DeleteTodo todoObj={i}/></li>
                    
                })}

            </ul>
        </>
    )
}

export default Todo;
