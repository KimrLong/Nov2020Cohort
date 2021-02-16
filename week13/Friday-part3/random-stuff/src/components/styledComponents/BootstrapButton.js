import React from "react";
import {Button} from 'react-bootstrap';
import styled from 'styled-components';

const FullWidthButton = styled(Button)`

  width: 100%;
  height: 120px;
  color: grey;
  font-size: 40px;
`

const BootstrapButton = () => {
  return <>
    <FullWidthButton variant="light">Light</FullWidthButton>
  
  </>;
};

export default BootstrapButton;
