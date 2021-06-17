import React from 'react'
import { css } from 'emotion'
import {Link} from 'react-scroll'
import banner from '../../images/banner.jpeg'
import SocialMenu from '../molecules/social-menu'
import Content from './content'
import Button from '../atoms/button'

const style = css`
  background-color: #333;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #ffffff;
  overflow: hidden;

  .caption {
    height: 60vh;
    color: #333333;
    display: flex;
    max-width: 960px;
    margin: auto;
    align-items: center;
    justify-content: flex-end;
    >div {
      padding: 10px;
      width: 45%;
    }
    h2 {
      font-family: "Playfair Display", Sans-serif;
      font-size: 35px;
      font-weight: 700;
      line-height: 1.2em;
    }
    span {
      font-size: 0.8em;
      line-height: 0.8em;
    }
    .button-box {
      padding: 20px 0;
    }
  }

  a {
    color: white !important;
    :hover {
      color: #11C76F !important;
    }
  }

  .special {
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
      color: #3c3c3c !important;
    }
  }

  @media (max-width: 780px) {
    .caption {
      padding: 15px 30px;
      >div {
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
        padding: 20px 30px;
      }
      h2 {
        font-family: "Playfair Display", Sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.2em;
      }
    }
  }
`

const Banner = () => (
  <div className={style}>
    <div className="caption">
      <div>
        <h2>Reputação.<br />Respeito. <em>Resultados...</em></h2>
        <span>
          <em>Somos qualificados em várias areas do direito. Trabalhamos com pessoas, para pessoas e com total respeito à lei. Entre em contato para maiores detalhes!</em>
        </span>
        <div className="button-box">
          <Link to="schedule" className="menu-item special" spy={true} smooth={true} delay={500} offset={1}>
            <i className="fa fa-clock-o"/> Agende um horario
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Banner;