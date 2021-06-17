import React from 'react'
import { css } from 'emotion'

const style = css `
  color: #333333;
  font-family: "Playfair Display", Sans-serif;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.24em;
  padding-bottom: 30px;
  em {
    color: #686157;
  }
`;

const SectionTitle = props => (
  <h2 className={style} style={{color: props.theme}}>
    {props.text} <em style={{color: props.specialTheme}}>{props.specialText}</em>
  </h2>
);

export default SectionTitle