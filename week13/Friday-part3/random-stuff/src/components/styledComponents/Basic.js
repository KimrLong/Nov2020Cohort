import React from "react";
import styled, {keyframes} from 'styled-components';

const move = keyframes`

  from{
    transfrom: transplateX(0);
  }
  to{
    transform: translateX(100%);
  }

`;


const Heading1 = styled.h1`
  animation: ${move} 2s ease infintite;
  // text-align: center; 
  color: fuchsia;

`
const Heading2 = styled.h1`

  text-align: center; 
  color: green;

`

const Basic = () => {
  return <>
  <div>

    <Heading1>Hello, There</Heading1>
    <Heading2>Hello, There</Heading2>
  </div>

  
  </>;
};

export default Basic;
