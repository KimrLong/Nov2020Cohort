import React from "react";
import styled, {keyframes} from 'styled-components';

<<<<<<< HEAD
const move = keyframes`

  from{
    transfrom: transplateX(0);
=======

const move = keyframes`
  from{
    transform: translateX(0);
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
  }
  to{
    transform: translateX(100%);
  }
<<<<<<< HEAD

`;


const Heading1 = styled.h1`
  animation: ${move} 2s ease infintite;
  // text-align: center; 
  color: fuchsia;

`
const Heading2 = styled.h1`

  text-align: center; 
  color: green;

=======
`;

const Heading1a = styled.h1`
    animation: ${move} 2s ease infinite;
    //text-align: center;
    color: fuchsia;
`

const Heading1b = styled.h1`

    text-align: center;
    color: green;
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
`

const Basic = () => {
  return <>
<<<<<<< HEAD
  <div>

    <Heading1>Hello, There</Heading1>
    <Heading2>Hello, There</Heading2>
  </div>

  
=======

    <div>
      <Heading1a>Hello There</Heading1a>
      <Heading1b>Hello There</Heading1b>
    </div>
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
  </>;
};

export default Basic;
