//action creators always have a type and return an obj
//item: {id, task, editmode}
export const addTodo = (item)=>{
    return {
        type: "ADD",
        data: item
    }
}
export const deleteTodo = (id)=>{
    return {
        type: "DELETE",
        data: id
    }
}

export const updateTodo = (item) =>{
    return {
        type: "UPDATE",
        data: item
    }

}

export const setEditMode = (id, editStatus) =>{
    return {
        type: "SET_EDIT_MODE",
        id: id,
        status: editStatus
    }
}