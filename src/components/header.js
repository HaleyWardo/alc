import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      boxShadow: `0 2px 4px 0 rgba(0,0,0,0.2)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        alignItems: `center`,
        display: `flex`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        maxWidth: 1024,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 
        style={{ 
          margin: 0,
          display: `flex`
        }}>
        <Link
          to="/"
          style={{
            color: `#333333`,
            fontSize: `25px`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav style={{width: `60%`}}>
        <ul 
          style={{
            display: `flex`,
            fontSize: `16px`,
            justifyContent: `space-around`,
            margin: `0`
          }}>
          <Link
            style={{
              color: `#659bdb`,
              textDecoration: `none`,
            }}
            to="/home"
          >Home</Link>

          <Link
            style={{
              color: `#659bdb`,
              textDecoration: `none`,
            }}
            to="/about"
          >About</Link>

          <Link
            style={{
              color: `#659bdb`,
              textDecoration: `none`,
            }}
            to="/services"
          >Services</Link>

          <Link
            style={{
              color: `#659bdb`,
              textDecoration: `none`,
            }}
            to="/projects"
          >Projects</Link>

          <Link
            style={{
              color: `#659bdb`,
              textDecoration: `none`,
            }}
            to="/news"
          >News</Link>

          <Link
            style={{
              color: `#659bdb`,
              textDecoration: `none`,
            }}
            to="/contact"
          >Contact Us</Link>

          <Link
            style={{
              color: `#659bdb`,
              textDecoration: `none`,
            }}
            to="/careers"
          >Careers</Link>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
