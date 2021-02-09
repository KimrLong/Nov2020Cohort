import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from '.FirstComponent';
import Parent from './ex1/Parent';
import Child from './ex1/Child';

let myArr = ["Jordan", "Micah", "Joe", "Jake"];



ReactDOM.render(
  <React.StrictMode>
    <Parent firstName={myArr[0]}/><br/>
    {/* <Child firstName={myArr[1]}/><br/>
    <Child firstName={myArr[2]}/><br/>
    <Child firstName={myArr[3]}/><br/> */}
  </React.StrictMode>,
  document.getElementById('root')
);



// Parent
// Child
// Grandchild