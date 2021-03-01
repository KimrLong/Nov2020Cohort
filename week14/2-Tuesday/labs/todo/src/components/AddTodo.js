
import React from 'react'
import {v1 as uuidv1} from 'uuid';
import {Add} from '../actions/todoActions';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

const HoverButton = styled.button`
  padding: 8px 12px;
  border: 0px;
  background: fuchsia;
  transition: all 300ms ease;

  :hover{
    background-color: pink;
    color: fuchsia;
  }

`;

const H1 = styled.h1`
  text-align: center;
  margin: 5 0 5 0;
  `




const AddTodo = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let todo = {
            id : uuidv1(),
            todo: e.target.todo.value
        }
        dispatch(Add(todo))

        e.target.todo.value='';
    }

  return (
    <>
      <H1>To Do List</H1>
        <form onSubmit={handleSubmit}>

            <input type="text" id ="todo" placeholder="todo item"/><br/>
            <HoverButton type="submit">Submit</HoverButton>
        </form>
    </>
  )
}



export default AddTodo;
