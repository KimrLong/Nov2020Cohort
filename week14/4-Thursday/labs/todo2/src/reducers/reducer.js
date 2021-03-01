import { setEditMode } from "../actions";

//CRUD: add, delete, update
const initialState ={
    todos: [{
        id: 1,
        task: "Go to the bank",
        editMode: false
    }]

}
const reducer = (state = initialState, action) =>{

    switch(action.type){
        case "ADD":
            return {
                ...state,
                todos: [...state.todos, action.data]
            }
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)

            }
        case "UPDATE":

        //arr=[1, 2, 3, 4, x, 5]
        //ar[3] = 4

        let arrCopy = [...state.todos];
        let index = arrCopy.findIndex(todo => todo.id === action.data.id);

        arrCopy[index] = action.data;

            return {
                ...state,
                todos: arrCopy
            }

        case "SET_EDIT_MODE":
            let newArr = [...state.todos];
            let idx = newArr.findIndex(todo=> todo.id === action.id);
            newArr[idx].editMode = action.status;
            return {
                ...state,
                todos: newArr
                
            }

        default:
            return state;
    }
}

export default reducer;