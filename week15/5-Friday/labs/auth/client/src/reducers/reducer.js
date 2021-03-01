import actionTypes from '../actions/actionTypes';

const initialState = {
    authenticaded: ""
}

const reducerTemplate = (state = initialState, action) => {

    switch(action.type){

        case "AUTH_USER":
            return{
                ...state,
                authenticaded: action.data
            }
        
        default:
            return state;
    } 
}


export default reducerTemplate;