


export const Add = (todoObj) =>{
    return {
        type: 'ADD_ITEM',
        data: todoObj
    }
}


export const Delete = (todoObj) =>{
    return {
        type: 'DELETE_ITEM',
        data: todoObj
    }
}

