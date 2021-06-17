import React from 'react'
import { css } from 'emotion'
import SocialMenu from '../molecules/social-menu'
import BrandName from '../atoms/brand-name'

const style = css`
  background: #333333;
  padding: 60px 20px;
  color: #fff !important;
  a {
    color: #fff !important;
  }
  .container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    >div {
      max-width: 35%;
    }
    h4, p {
      margin: 5px 0;
      padding: 0;
    }
    .description, .contact {
      color: #bebebe;
      font-family: "Montserrat", Sans-serif;
      font-size: 12px;
      font-weight: 300;
      line-height: 1.71em;
      letter-spacing: -0.1px;
    }
    .contact {
      text-align: right;
    }
    .description {
      padding: 10px 0;
    }
    .social-icon {
      padding: 0 5px;
    }
  }
  .divider {
    font-size: 12px;
    color: #bebebe;
    width: 100%;
    border-top: 2px solid #454545;
    text-align: center;
    margin-top: 20px;
    padding-top: 40px;
  }

  

  @media (max-width: 780px) {
    .container {
      display: block;
      >div {
        max-width: 100%;
      }
      .contact {
        text-align: left;
      }
    }
  }
`

const Footer = () => (
  <footer className={style}>
      <div className="container">
        <div>
          <BrandName />
          <div className="description">
            <em>Sua proteção confiável na jurisprudência. Nossa qualificação oferece a oportunidade de solucionar os problemas de qualquer complexidade.</em>
          </div>
        </div>
        <div className="contact">
          <h4>Informações de contato:</h4>
          <p>
            <i className="fa fa-map-marker"/> Endereço: Rua Baependi, n 380, Jardim da Gloria, Vespasiano/MG - CEP: 33.206-006
          </p>
          <p>
            <i className="fa fa-envelope"/> silveiraemoreira.advocacia@gmail.com
          </p>
          <p>
            <i className="fa fa-phone"/> +55 31 99999-9999
          </p>
          <SocialMenu />
        </div>
      </div>
      <div className="divider">
        Desenvolvido com <i className="fa fa-heart"/> por <a target="_blank" href="https://diegoborgs.com.br">DiegoBorgs</a>
      </div>
  </footer>
)

export default Footer