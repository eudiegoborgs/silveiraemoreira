import React from 'react'
import { css } from 'emotion'

const style = css `
  background-color: #3c3c3c;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: solid 2px #3c3c3c;
  border-radius: 50px 50px 50px 50px;
  font-family: "Playfair Display", Sans-serif;
  font-weight: 700;
  :hover {
    cursor: pointer;
    background: transparent;
    color: #3c3c3c;
  }
`;

const Button = props => (
  <button {...props} className={style}>
    {props.children}
  </button>
);

export default Button