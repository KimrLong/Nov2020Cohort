import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BaseLayout = (props) => {
    return 
    <>

    <Header/>
    <br></br>
    here is some header
    {props.children}
    <br></br>
    <Footer/>
    </>;

};

export default BaseLayout;
