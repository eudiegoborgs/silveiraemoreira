import React from 'react'
import { css } from 'emotion'
import SocialMenu from '../social-menu'

const style = css`
  background-color: #3c3c3c;
  color: #bebebe;
  @media(max-width: 780px) {
    display: none;
  }

  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 0.35rem 1.0875rem;
    display: flex;
    justify-content: space-between;
  }

  .right, .left {
    display: flex;

    >* {
      padding: 0 10px;
      @media (max-width: 780px) {
        padding: 0 5px;
      }
    }
  }

  .right {
    justify-content: flex-end;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      display: inline;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0.3px;
      margin: 0;
      margin-right: 20px;
    }
  }

  a {
    color: #bebebe !important;
  }
`;

const SocialBar = () => (
  <section className={style}>
    <div className="container">
      <div className="left">
        <ul>
          <li>
            <i aria-hidden="true" class="fa fa-phone" /> +55 31 99999-9999
          </li>
          <li>
            <i aria-hidden="true" class="fa fa-envelope" /> silveiraemoreira.advocacia@gmail.com
          </li>
          <li>
            <i aria-hidden="true" class="fa fa-map-marker" /> Lagoa Santa | MG
          </li>
        </ul>
      </div>
      <div className="right">
        <SocialMenu />
      </div>
    </div>
  </section>
)

export default SocialBar