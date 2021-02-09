import React from 'react'
import Child from './Child';

const Parent = (props) => {
    return(

        <>My name is {props.firstName} 
        <Child/>
        </>
    )
}



export default Parent