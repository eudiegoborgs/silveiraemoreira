import React from 'react'
import { css } from 'emotion'

const style = css`
  max-width: 960px;
  margin: 3rem auto;
  padding: 0 30px;

  @media (max-width: 780px) {
    padding-top: 30px;
    margin: 1.5rem auto;
  }
`;

const Content = ({ children }) => {
  return (
      <div className={style}>
        <main>{children}</main>
      </div>
  )
}

export default Content;