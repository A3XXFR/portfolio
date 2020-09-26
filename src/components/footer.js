import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.css'

const date = new Date().getFullYear();

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          email
          social {
            youtube
            instagram
            linkedin
          }
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <h2 className={`section-header ${footerStyles.footerTitle}`}>Get <span className="gold-font">In Touch</span></h2>
      <div className={footerStyles.socialIcons}>
        <a className="instagram-icon" href={data.site.siteMetadata.social.instagram}>Instagram</a>
        <a className="linkedin-icon" href={data.site.siteMetadata.social.linkedin}>LinkedIn</a>
        <a className="youtube-icon" href={data.site.siteMetadata.social.youtube}>Youtube</a>
      </div>
      <div className={footerStyles.address}>
        <div>+971 52 998 7374</div>
        <a href={`mailto:${data.site.siteMetadata.email}`}>{data.site.siteMetadata.email}</a>
        <div>5 Khalifa Street, Abu Dhabi, UAE</div>
      </div>
      <form name="contact-form" method="POST" data-netlify="true"/>
      <input className={`${footerStyles.smallInput} ${footerStyles.nameInput}`} form="contact-form" type="text" name="name" placeholder="Name" required/>
      <input className={`${footerStyles.smallInput} ${footerStyles.emailInput}`} form="contact-form" type="email" name="email" placeholder="Email" required/>
      <input className={`${footerStyles.smallInput} ${footerStyles.phoneInput}`} form="contact-form" type="tel" name="phone" placeholder="Phone" required/>
      <input className={`${footerStyles.smallInput} ${footerStyles.companyInput}`} form="contact-form" type="text" name="company" placeholder="Company" required/>
      <textarea className={`${footerStyles.largeInput} ${footerStyles.messageInput}`} form="contact-form" name="message" placeholder="Message" required/>

      <div className={footerStyles.formSubmit}>
        <input className="link-button" form="contact-form" type="submit" value="Send"/>
      </div>

      <div className={footerStyles.lowerContainer}>
        <div className={footerStyles.footerHeader}>
          <span>Farasat&#160;<span className="gold-font">M.</span></span>
        </div>
        <div className={footerStyles.navBar}>
          <Link to="/projects/" className="hover-underline hover-underline-dark projects-floating-menu-trigger">Projects</Link>
          <Link to="/about/" className="hover-underline hover-underline-dark">About</Link>
          <Link to="/contact/" className="hover-underline hover-underline-dark">Contact</Link>
        </div>
        <div className={footerStyles.copyright}>
          &copy; {data.site.siteMetadata.author} {date} | All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer