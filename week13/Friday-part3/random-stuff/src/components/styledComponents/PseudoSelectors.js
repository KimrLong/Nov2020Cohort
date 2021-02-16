import React from "react";
import styled from 'styled-components';


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


const PseudoSelectors = () => {
  return <>
  
  <HoverButton>CLICKKKMEEHH</HoverButton>
  
  </>;
};

export default PseudoSelectors;
