import React from 'react'
import { css } from 'emotion'
import Divider from '../../atoms/divider'
import SectionTitle from '../../atoms/section-title'
import Content from '../content'

const style = css `
  display: flex;
  justify-content: space-between;

  .right {
    max-width: 330px;
    min-width: 330px;
  }
  .left {
    color: #6a7680;
    font-family: "Montserrat", Sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 2.2em;
    letter-spacing: -0.1px;
    padding-left: 15px;
  }

  @media (max-width: 780px) {
    display: block;
  }
`;

const OurValues = props => (
  <section id="ourvalues">
    <Content>
      <Divider />
      <div className={style}>
        <div className="right">
          <SectionTitle text="Por que você deveria confiar em nós?" specialText="Nossos valores." />
        </div>
        <div className="left">
          <p>
            Valorizamos a justiça, a honestidade e o tempo. Estamos sempre ao seu serviço, pois somos os responsáveis ​​pela sua defesa. Qualquer detalhe será notado e pode ser essencial para o seu caso.
          </p>
          <p>
            Durante o nosso trabalho, reunimos uma equipe de especialistas dedicados com rica experiência em assistência jurídica. Colocamos grande ênfase no direito empresarial, porque no ambiente em rápida mudança de hoje, as pessoas precisam de ajuda nas esferas de negócios. Nossa experiência nos permite ter confiança e cumprir nossas palavras.
          </p>
          <p>Nossa empresa foi fundada em 2020. Começamos como uma pequena consultoria jurídica. Comprovamos nossa competência e tivemos muitos clientes satisfeitos. Expandimos a nossa actividade e passámos a prestar muitos outros serviços jurídicos para responder às necessidades mais amplas dos clientes.s</p>
        </div>
      </div>
    </Content>
  </section>
);

export default OurValues