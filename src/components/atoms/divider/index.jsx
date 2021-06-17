import React from 'react'
import { css } from 'emotion'

const style = css `
  width: 70px;
  margin: 0 auto;
  margin-left: 0;
  border-top: 2px solid #333333;
  padding-bottom: 30px;
`;

const Divider = props => (
  <div className={style} />
);

export default Divider