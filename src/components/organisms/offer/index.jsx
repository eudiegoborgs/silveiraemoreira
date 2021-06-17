import React from 'react'
import { css } from 'emotion'
import Divider from '../../atoms/white-divider'
import SectionTitle from '../../atoms/section-title'
import Content from '../content'
import banner from '../../../images/city-bg.jpeg'

const style = css ` 
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #bebebe;
  padding-bottom: 20px;

  .center {
    display: flex;
    width: 100%;
    justify-content: center;
    >div {
      margin: auto;
    }
  }
  p {
    font-family: "Lato", Sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.7em;
  }
  .contain {
    h2 {
      max-width: 550px;
      margin: 0 auto;
    }
    text-align: center;
  }
`;

const Offer = props => (
  <section name="#offer" className={style}>
    <Content>
      <div className="center">
        <Divider />
      </div>
      <div className="contain">
        <SectionTitle text="Nós temos o melhor serviço por um preço justo" theme="white" />
        <div>
          <p>
            Estamos orgulhosos de que nosso escritório de advocacia oferece serviços jurídicos de primeira linha por um preço acessível em todo o país! Conosco, você nunca vai sentir que os advogados são apenas ladrões de terno, além disso, ganhamos 98% dos casos. Conosco, suas chances de ganhar são as maiores possíveis!
          </p>
        </div>
      </div>
    </Content>
  </section>
);

export default Offer