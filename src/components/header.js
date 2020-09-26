import React, { useState } from "react"
import { Link } from "gatsby"

import headerStyles from './header.module.css'

const Header = (props) => {
  let isMobile
  if (typeof window !== 'undefined')
    isMobile = window.matchMedia("only screen and (max-width: 768px)").matches

  console.log("Mobile? "+isMobile)

  const [menuOpen, setMenuOpen] = useState(!isMobile)

  console.log(menuOpen)

  const containerStyles = {}
  const hamburgerStyles = {}
  const titleStyles = {}

  if (props.transparantBackground==="true") {
    containerStyles.background = `none`
  }else if (props.darkMode==="true") {
    containerStyles.background = `var(--gunmetal)`
  } else {
    containerStyles.background = `var(--light-grey)`
  }

  if (props.whiteFont==="true") {
    containerStyles.color = `#ffffff`
    hamburgerStyles.color = `#ffffff`
  }

  if (menuOpen)
    hamburgerStyles.color = `#ffffff`

  const toggleMenu = () => {
    if(isMobile) {
      console.log(menuOpen)
      setMenuOpen(!menuOpen)
    }
  }

  props.fixedHeader==="true" ? containerStyles.position = `fixed` : containerStyles.position = `relative`

  return (

    <header className={headerStyles.headerContainer} style={containerStyles}>
      <Link to="/" className={headerStyles.title} style={titleStyles}>
        <span>Farasat&#160;<span className="gold-font">M.</span></span>
        <div className={headerStyles.headingSubtext}>Architect & Designer</div>
      </Link>
      <div className={headerStyles.contactInfo}>+971 52 998 7374</div>
      {menuOpen &&
      <div className={headerStyles.navBar} id="navBar">
        <Link to="/" className="hover-underline" onClick={toggleMenu}>Home</Link>
        <Link to="/projects/" className="hover-underline" onClick={toggleMenu}>Projects</Link>
        <Link to="/about/" className="hover-underline" onClick={toggleMenu}>About</Link>
        <Link to="/contact/" className="hover-underline" onClick={toggleMenu}>Contact</Link>
      </div>
      }
      <button className={headerStyles.hamburgerMenu} style={hamburgerStyles} onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  )
}

export default Header