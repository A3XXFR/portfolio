import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import cardStyles from './project-card.module.css'

const ProjectCard = (props) => {
  return (
    <Link to={`/project/${props.slug}`} className={cardStyles.card}>
      <Img
        fluid={props.thumbnail.node.childImageSharp.fluid}
        className={cardStyles.bgImage}
      />
      <div className={cardStyles.imgOverlay}>
        <div className={cardStyles.info}>
          <div className={cardStyles.title}>
            <h3>{props.projectName}<br/><span className="gold-font">{props.projectNameGold}</span></h3>
          </div>
          <div className={cardStyles.projectAddress}><span className="gold-font">{props.projectDate}</span> {props.projectAddress}</div>
        </div>
        <div className={cardStyles.verticalText}>{props.projectType}</div>
      </div>
    </Link>
  )
}

export default ProjectCard