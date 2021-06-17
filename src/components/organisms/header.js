import React from "react"
import { css } from 'emotion';
import Navbar from "../molecules/navbar";
import SocialBar from "../molecules/social-bar";
import BrandName from '../atoms/brand-name';

const style = css`
  background: transparent;
  width: 100vw;
  position: relative;
  top: 0;

  .container {
    position: sticky;
    top: 0;
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem 1.0875rem;
    display: flex;
    justify-content: space-between;
  }

  .right, .left {
    display: flex;
    align-items: center;

    >* {
      padding: 0 10px;
      @media (max-width: 780px) {
        padding: 0 5px;
      }
    }
  }
`;

const Header = () => (
  <header id="home" className={style}>
    <SocialBar />
    <div className="container">
      <div className="left">
        <BrandName />
      </div>
      <Navbar />
    </div>
  </header>
)

export default Header
