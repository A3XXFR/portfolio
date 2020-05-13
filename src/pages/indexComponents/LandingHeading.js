import React, { useState } from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

import LandingHeaderStyles from "./LandingHeader.module.css"
import Header from "../../components/header"

const LandingHeading = (props) => {
  const projects = props.projects
  let length
  let node

  const [index, setIndex] = useState(0)

  if(projects != null)
    length = projects.length - 1

  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
  }
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  if(projects != null) {
    node = projects[index]
  }

  setTimeout(() => {
    handleNext()
  }, 10000);

  if (projects != null) {
    return (
      <React.Fragment>
        <section className={LandingHeaderStyles.landingSection}>
          <Header transparantBackground="true" darkMode="false" whiteFont="true" darktitle="true" fixedHeader=""/>
          <div className={LandingHeaderStyles.headerGradient}/>
          <Link to={`/project/${node.node.fields.slug}`} className={LandingHeaderStyles.imgLink}>
            <Img
              loading="eager"
              className={LandingHeaderStyles.carouselImg}
              fluid={node.heroImage.node.childImageSharp.fluid}
              alt={node.heroImage.node.base.split(".")[1]}
              imgStyle={{
                objectPosition: "center center",
              }}
            />
          </Link>
          <div className={LandingHeaderStyles.carouselCaptionContainer}>
            <Link to={`/project/${node.node.fields.slug}`} className={LandingHeaderStyles.carouselCaption}>
              <h2>{node.node.frontmatter.projectName} {node.node.frontmatter.projectNameGold}</h2>
              <p className={LandingHeaderStyles.projectDescription}>
                {node.node.frontmatter.featuredDescription}
              </p>
              {/*<Link className={LandingHeaderStyles.linkButton} to={`/project/${node.node.fields.slug}`}>Learn More</Link>*/}
            </Link>
          </div>
          <div className={LandingHeaderStyles.carouselControl}>
            <div className={LandingHeaderStyles.carouselImgCircles} onClick={handlePrevious}/>
            <div className={LandingHeaderStyles.carouselImgCircles} onClick={handleNext}/>
          </div>
        </section>
      </React.Fragment>
    )
  }else{
    return null
  }

}

export default LandingHeading