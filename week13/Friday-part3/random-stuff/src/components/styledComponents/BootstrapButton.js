import React from "react";
import {Button} from 'react-bootstrap';
import styled from 'styled-components';

const FullWidthButton = styled(Button)`

  width: 100%;
<<<<<<< HEAD
  height: 120px;
  color: grey;
  font-size: 40px;
`

const BootstrapButton = () => {
  return <>
    <FullWidthButton variant="light">Light</FullWidthButton>
  
=======
  height: 100px;
  color: white;
  font-size: 40px;

`

const BootstrapButton = () => {


  return <>
    <FullWidthButton variant="warning">Warning</FullWidthButton>
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
  </>;
};

export default BootstrapButton;
