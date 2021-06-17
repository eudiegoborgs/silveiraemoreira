import React from 'react'
import { css } from 'emotion'
import Divider from '../../atoms/white-divider'
import SectionTitle from '../../atoms/section-title'
import Content from '../content'
import { InlineWidget } from "react-calendly"

const style = css`
  background: #333333;
  .container {
    display: flex;
    justify-content: space-between;

    .right {
      max-width: 440px;
      min-width: 440px;
      color: #ccc;
    }
    .left {
      font-family: "Montserrat", Sans-serif;
      font-size: 14px;
      font-weight: 300;
      line-height: 2.2em;
      letter-spacing: -0.1px;
    }
  }


  @media (max-width: 780px) {
    .container {
      display: block;

      .right {
        min-width: 100%;
        max-width: 100%;
      }
    }
  }
`;

const Schedule = props => (
  <section name="schedule" className={style}>
    <Content>
      <Divider />
      <div className="container">
        <div className="right">
          <SectionTitle text="Vamos tomar um café?" specialText="Agende um horário." theme="white" specialTheme="#ffa726"/>
          <p>
            <em>Nós podemos te atender online ou presencialmente e esclarecer todas as suas duvidas sobre nossos serviços. Escolha a melhor data e o melhor horario para nos falarmos.</em>
          </p>
        </div>
        <div className="left">
          <InlineWidget 
            url="https://calendly.com/silveiraemoreira-advocacia/reuniao" 
            style={{maxWidth: '100%', height: '300px'}}
            pageSettings={{
              backgroundColor: '333333',
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: 'ffa726',
              textColor: 'ffffff'
            }}
          />
        </div>
      </div>
    </Content>
  </section>
);

export default Schedule