import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

const Sample2 = ()=> {



    let history = useHistory();
    let {id} = useParams();

    const handleClick = () =>{
        console.log('logic for samp2');

        history.push('/')
    }
    return 
    <>
        <h2>Sample2 page</h2>
        <h3>{id}</h3>
        <button onClick={handleClick}>Click MEHEHEHEH</button>
    </>;
    

};

export default Sample2;
