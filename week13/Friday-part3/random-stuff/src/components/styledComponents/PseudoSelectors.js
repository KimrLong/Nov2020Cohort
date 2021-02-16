import React from "react";
import styled from 'styled-components';

<<<<<<< HEAD

const HoverButton = styled.button`
  padding: 8px 12 px;
  border: 0px;
  background-color: pink;
  transition: all 300ms ease;

  :hover{
    background-color: teal;
    color: yellow;
  }


`;

=======
const HoverButton = styled.button`
  padding: 8px 12px;
  border: 0px;
  background: fuchsia;
  transition: all 300ms ease;

  :hover{
    background-color: pink;
    color: fuchsia;
  }

`;
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498

const PseudoSelectors = () => {
  return <>
  
<<<<<<< HEAD
  <HoverButton>CLICKKKMEEHH</HoverButton>
  
=======
    <HoverButton>Click Me</HoverButton>
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
  </>;
};

export default PseudoSelectors;
