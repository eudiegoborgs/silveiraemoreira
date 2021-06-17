import React from 'react'
import { css } from 'emotion'
import Divider from '../../atoms/divider'
import SectionTitle from '../../atoms/section-title'
import Content from '../content'
import Button from '../../atoms/button'

const style = css `
  display: flex;
  justify-content: space-between;

  .right {
    max-width: 330px;
    min-width: 330px;
  }
  .left {
    width: 100%;
    color: #333333;
    font-family: "Montserrat", Sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 2.2em;
    letter-spacing: -0.1px;
    padding-left: 30px;
  }
  form {
    width: 100%;
    display: block;
    input, textarea {
      display: block;
      width: 100%;
      box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2);
      border-radius: 5px;
      border: solid 1px #333333;
      padding: 5px 10px;
      background-color: #fff;
      color: #333;
    }
    .submit {
      text-align: right;
    }
  }



  @media (max-width: 780px) {
    display: block;

    .right {
      min-width: 100%;
      max-width: 100%;
    }

    .left {
      padding-left: 0px;
    }
  }
`;

const ContactUs = props => (
  <section name="contactus">
    <Content>
      <Divider />
      <div className={style}>
        <div className="right">
          <SectionTitle text="Se preferir, você também pode nos enviar uma mensagem." specialText="Ficaremos feliz em te atender ;)" />
        </div>
        <div className="left">
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className={style}>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Nome: <input type="text" name="name" /></label>
              <label>E-mail: <input type="email" name="email" /></label>
              <label>Mensagem: <textarea name="message"></textarea></label>
            </p>
            <p className="submit">
              <Button type="submit">Enviar uma mensagem</Button>
            </p>
          </form>
        </div>
      </div>
    </Content>
  </section>
);

export default ContactUs