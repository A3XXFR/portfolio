import React, { useState } from "react"
import Gallery from "./gallery"
import carouselStyles from "./carousel.module.css"
import Img from "gatsby-image"

const Carousel = (props) => {
  console.log(props)
  const images = props.props
  const img = images[0].node
  const [showGallery, setShowGallery] = useState(false)

  const updateGalleryVisibility = () => {
    setShowGallery(!showGallery)
    setBodyScroll()
  }

  const setBodyScroll = () => {
    console.log(showGallery)
    if(!showGallery) {
      console.log("hiding scroll")
      document.body.style.overflow = "hidden"
    }else{
      console.log("showing scroll")
      document.body.style.overflow = ""
    }
  }

  console.log(images)
  console.log(img)

  return (
    <React.Fragment>
      <div onClick={updateGalleryVisibility} className={carouselStyles.carouselContainer}>
        <Img
          className={carouselStyles.activeImageImg}
          fluid={img.childImageSharp.fluid}
          key={img.id}
          alt={img.base.split(".")[1]}
          imgStyle={{
            height: "100%",
            objectFit: "contain",
            objectPosition: "center center"
          }}
        />
        <div className={carouselStyles.buttonContainer}>
          <a className={`hover-underline ${carouselStyles.linkButton}`}>{props.children}</a>
        </div>
      </div>
      {showGallery ? <Gallery props={images} closerClicked={updateGalleryVisibility}/> : null}
    </React.Fragment>
  )
}

export default Carousel