import React from 'react';
import Grandchild from './Grandchild';

const Child = (props) => {
    return(

        <div>I'm a child {props.sib1}
            <Grandchild name ="carlos"/>
        </div>

    )
}



export default Child