import React from "react"
import Img from "gatsby-image"

import pageHeroStyles from "./projectPageHero.module.css"

const ProjectPageHero = ({props}) => {
  return (
    <div className={pageHeroStyles.heroContainer}>
      <div className={pageHeroStyles.heroDetailsContainer}>
        {props.projectDate} - {props.projectAddress} <br/>
        <h2>{props.projectName}</h2>
      </div>
      <Img className={pageHeroStyles.heroImage} fluid={props.heroImg.node.childImageSharp.fluid} alt={props.heroImg.node.base.split(".")[1]} />
    </div>
  )
}

export default ProjectPageHero