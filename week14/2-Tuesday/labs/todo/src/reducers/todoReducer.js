import {v1 as uuidv1 } from 'uuid';



const initialState = {
    id : uuidv1(),
    todos: []


}
const todoReducer = (state, action) =>{

    if (state === undefined){
        state = initialState
    }
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                todos: [...state.todos, action.data]
                
            }
            case 'DELETE_ITEM':
                return{
                    ...state,
                    todos: state.todos.filter(todo => action.data.fName !== todo.fName)
                }

        default: 
            return state
    }

}









export default todoReducer;