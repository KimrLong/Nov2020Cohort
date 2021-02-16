let initialState = {
    entry: '',
    title: 'Todo List',
    persons: []
}

const todoReducer = (state, action) =>{
    if(state === undefined){
        state = initialState
    }

    switch(action.type){



                default:
                    return state

    }



}

export default counterReducer;