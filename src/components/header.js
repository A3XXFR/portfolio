import React from 'react'
import { Link } from "gatsby"

import headerStyles from './header.module.css'

const Header = (props) => {
  const containerStyles = {
    height: `10vh`,
    width: `100vw`,
    display: `flex`,
    alignItems: `center`,
    zIndex: `100`,
    transition: `250ms ease-in-out`,
  }

  const titleStyles = {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `100%`,
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: `36px`,
    textTransform: `uppercase`,
  }

  if (props.transparantBackground==="true") {
    containerStyles.background = `none`
  }else if (props.darkMode==="true") {
    containerStyles.background = `var(--gunmetal)`
  } else {
    containerStyles.background = `var(--light-grey)`
  }

  if (props.whiteFont==="true") {
    containerStyles.color = `#ffffff`
  }

  props.fixedHeader==="true" ? containerStyles.position = `fixed` : containerStyles.position = `relative`

  if (props.darktitle==="true") {
    titleStyles.background = `var(--gunmetal)`
    titleStyles.width = `20%`
    titleStyles.padding = `0`
    titleStyles.color = `#ffffff`
  } else {
    titleStyles.paddingLeft = `5%`
  }

  return (
    <header style={containerStyles}>
      <Link to="/" style={titleStyles}>
        <span>Farasat&#160;<span className="gold-font">M.</span></span>
        <div className={headerStyles.headingSubtext}>Architect & Designer</div>
      </Link>
      <div className={headerStyles.contactInfo}>+971 52 998 7374</div>
      <div className={headerStyles.navBar}>
        <Link to="/" className="hover-underline">Home</Link>
        <Link to="/projects/" className="hover-underline">Projects</Link>
        <Link to="/about/" className="hover-underline">About</Link>
        <Link to="/contact/" className="hover-underline">Contact</Link>
      </div>
    </header>
  )
}

export default Header