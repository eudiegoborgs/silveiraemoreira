import React from 'react'
import { css } from 'emotion'
import { StaticQuery, graphql, Link } from "gatsby"

const style = css`
  line-height: 1;
  font-size: 1.3rem;
  color: #333333;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Playfair Display", Sans-serif;
  p {
    margin: 0;
    padding: 0;
  }
  small {
    font-weight: normal;
    font-size: 0.4em;
    display: block;
  }
  @media (max-width: 780px) {
    font-size: 0.9rem;
  }
`;

const BrandName = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <Link to="/" className={style}>
          <p>{data.site.siteMetadata.title}</p>
          <small>
            {data.site.siteMetadata.description}
          </small>
        </Link>
      )}
    />
  )
}

export default BrandName;