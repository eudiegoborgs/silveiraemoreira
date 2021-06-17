import React from 'react'
import { css } from 'emotion'
import Divider from '../../atoms/divider'
import SectionTitle from '../../atoms/section-title'
import Content from '../content'

const style = css `
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .item {
    margin: 10px;
    border: solid 1px #ececec;
    padding: 20px;
    text-align: center;
    width: 30%;
    .fa {
      color: #686157;
      font-size: 57px;
    }
    h3 {
      color: #333333;
      font-family: "Playfair Display", Sans-serif;
      font-size: 24px;
      font-weight: bold;
    }
  }

  @media (max-width: 780px) {
    display: block;
    .item {
      width: 100%;
    }
  }
`;

const pratices = [
  {
    icon: 'home',
    title: 'Direito Familiar',
    description: 'Nosso objetivo é apoiar as famílias na resolução de suas próprias disputas. Garantimos consultoria profissional e resultado.'
  },
  {
    icon: 'home',
    title: 'Direito Familiar',
    description: 'Nosso objetivo é apoiar as famílias na resolução de suas próprias disputas. Garantimos consultoria profissional e resultado.'
  },
  {
    icon: 'home',
    title: 'Direito Familiar',
    description: 'Nosso objetivo é apoiar as famílias na resolução de suas próprias disputas. Garantimos consultoria profissional e resultado.'
  },
  {
    icon: 'home',
    title: 'Direito Familiar',
    description: 'Nosso objetivo é apoiar as famílias na resolução de suas próprias disputas. Garantimos consultoria profissional e resultado.'
  },
  {
    icon: 'home',
    title: 'Direito Familiar',
    description: 'Nosso objetivo é apoiar as famílias na resolução de suas próprias disputas. Garantimos consultoria profissional e resultado.'
  },
  {
    icon: 'home',
    title: 'Direito Familiar',
    description: 'Nosso objetivo é apoiar as famílias na resolução de suas próprias disputas. Garantimos consultoria profissional e resultado.'
  },
]

const PraticeAreas = props => (
  <section name="praticeareas">
    <Content>
      <Divider />
      <SectionTitle text="Conheça nossas" specialText="areas de atuação." />
      <div className={style}>
        {pratices.map(pratice => (
          <div className="item">
            <i className={`fa fa-${pratice.icon}`} />
            <h3>{pratice.title}</h3>
            <small>{pratice.description}</small>
          </div>
        ))}
      </div>
    </Content>
  </section>
);

export default PraticeAreas