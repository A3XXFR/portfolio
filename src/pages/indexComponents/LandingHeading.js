import React, { useState } from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

import LandingHeaderStyles from "./LandingHeader.module.css"
import Header from "../../components/header"

const LandingHeading = (props) => {
  const projects = props.projects

  const [index, setIndex] = useState(0)
  const length = projects.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  const node = projects[index]

  return (
    <React.Fragment>
      <Header transparantBackground="true" darkMode="false" whiteFont="true" darktitle="true" fixedHeader=""/>

      <section className={LandingHeaderStyles.landingSection}>
          <Img
            loading="eager"
            className={LandingHeaderStyles.carouselImg}
            fluid={node.heroImage.node.childImageSharp.fluid}
            alt={node.heroImage.node.base.split(".")[1]}
            imgStyle={{
              objectPosition: "center center",
            }}
          />
          <div className={LandingHeaderStyles.carouselCaptionContainer}>
            <div className={LandingHeaderStyles.carouselCaption}>
              <h1>{node.node.frontmatter.projectName} {node.node.frontmatter.projectNameGold}</h1>
              <p className={LandingHeaderStyles.projectDescription}>
                {node.node.frontmatter.featuredDescription}
              </p>
              <Link className={LandingHeaderStyles.linkButton} to={`/project/${node.node.fields.slug}`}>Learn More</Link>
            </div>
          </div>
          <div className={LandingHeaderStyles.carouselSidebar}>
              <div className={LandingHeaderStyles.carouselCounter}>
                  <span className={`${LandingHeaderStyles.carouselCounterCurrent} gold-font`}>0{index+1}</span>
                  <span className={LandingHeaderStyles.carouselCounterSuper}>/0{length+1}</span>
              </div>
              <div className={LandingHeaderStyles.landingSubtext}>Architect & Designer</div>
              <div className={LandingHeaderStyles.carouselControl}>
                  <div className="carousel-move-btn hover-underline hover-underline-light" onClick={handlePrevious}>&#8592; Prev</div>
                  <div className="carousel-move-btn hover-underline hover-underline-light" onClick={handleNext}>Next &#8594;</div>
              </div>
              <div className={LandingHeaderStyles.dividerLine}>
                  <div></div>
              </div>
              <div className={LandingHeaderStyles.landingSocialIcons}>
                  <a className="instagram-icon" href="https://www.instagram.com"/>
                  <a className="linkedin-icon" href="https://www.instagram.com/farasatmirza"/>
                  <a className="whatsapp-icon" href=""/>
              </div>
          </div>
          <div className={LandingHeaderStyles.imgCache}>
            {projects.map(project => {
              console.log(project)
              return (
                <Img
                  loading="eager"
                  fluid={project.heroImage.node.childImageSharp.fluid}
                  alt={project.heroImage.node.base.split(".")[1]}
                />
              )
            })}
          </div>
      </section>
    </React.Fragment>
  )

}

export default LandingHeading