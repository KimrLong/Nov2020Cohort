
import actionTypes from './actionTypes';
import axios from 'axios';


export const signUp = (formData) =>{
    console.log(formData)
    //take username & password
    //call our server api
    //wait for auth token
    //call reducer to store token

    //formData => {email, password}

    return async dispatch => {
        
        try{
            let response = await axios.post('http://localhost:3001/signup', formData) //form data will be put on header
            console.log(response.data.token);

            //dispatch action reducer
            dispatch({type: "AUTH_USER", data: response.data.token})
        }
        catch(e){
            console.log(e);
        }

    }
}
//loggin into application
export const signin = (formData)=>{
    return async dispatch =>{
        try {
            let response = await axios.post('http://localhost:3001/signin', formData);
            dispatch({type: "AUTH_USER", data: response.data.token});
            console.log('signin', response.data.token);
            localStorage.setItem('token', response.data.token);
        }
        catch(e){

        }
    }
}

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: "AUTH_USER",
        data: ""

    }
}