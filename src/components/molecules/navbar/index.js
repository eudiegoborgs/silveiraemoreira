import { Link } from "react-scroll"
import React from "react"
import { css } from 'emotion'
import MobileMenu from '../../atoms/mobile-menu'
import SocialMenu from '../../molecules/social-menu'

const style = css `
  display: flex;
  align-items: center;
  .menu {
    top: 45px;
    transition: display 0.5s linear;
  }
  .menu {
    .social-menu {
      display: none;
    }
  }
  .mobile-menu {
    display: none;
    >* {
      height: 6px;
    }
  }
  .menu-item {
    margin: 2px 10px;
    color: #333333;
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    @media(max-width: 780px) {
      margin: 0 5px;
      line-height: 1;
    }
    &:hover, &[aria-current="page"], .active {
      border-bottom: solid 1px #333333;
    }
  }
  .special {
    background: #333;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    border: solid 1px #333;
    .fa {
      padding-right: 3px;
    }
    &:hover, &[aria-current="page"], .active {
      background: transparent;
      color: #333;
    }
  }
  @media(max-width: 780px) {
    .menu {
      display: none;
    }
    .mobile-menu {
      display: inline-block;
    }
    .menu.active {
      display: block;
      position: absolute;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #ffffff;
      padding: 1rem 1.0875rem;
      .menu-item {
        display: block;
        margin: 20px auto;
        font-size: 2rem;
        text-align: right;
        padding: 10px 10px;

        .fa {
          display: none;
        }
        &:hover, &[aria-current="page"], .active {
          border-bottom: none;
        }
      }

      .special {
        background: transparent;
        color: #333;
        border-radius: 0px;
        padding: 0px;
        border: none;
      }
      .social-menu {
        display: block;
      }

      .social-menu a {
        padding-left: 15px;
        color: #333 !important;
        float: right;
      }
    }
  }
`;

const Navbar = () => {
  const [Open, setOpen] = React.useState(false);
  return (
    <div className={style}>
      <div className={`menu ${Open && 'active'}`}>
        <Link activeClass="active" to="home" className="menu-item" spy={true} smooth={true}>
          Início
        </Link>
        <Link to="ourvalues" className="menu-item" spy={true} smooth={true}>
          Sobre nós
        </Link>
        <Link to="praticeareas" className="menu-item" spy={true} smooth={true}>
          Areas de atuação
        </Link>
        <Link to="contactus" className="menu-item" spy={true} smooth={true}>
          Contato
        </Link>
        <Link to="schedule" className="menu-item special" spy={true} smooth={true}>
          <i className="fa fa-clock-o"/> Agende um horario
        </Link>
        <div className="social-menu">
          <SocialMenu />
        </div>
      </div>
      <div className="mobile-menu">
        <MobileMenu onClick={setOpen}/>
      </div>
    </div>
  )
}

export default Navbar
