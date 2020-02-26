import React, { useState } from "react"
import Gallery from "./gallery"
import carouselStyles from "./carousel.module.css"
import Img from "gatsby-image"

const Carousel = ({props}) => {
  const img = props[0].node
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

  console.log(showGallery)

  return (
    <React.Fragment>
      <div onClick={updateGalleryVisibility} className={carouselStyles.carouselContainer}>
        <Img
          className={carouselStyles.activeImageImg}
          fluid={img.childImageSharp.fluid}
          key={img.id}
          alt={img.base.split(".")[1]}
          imgStyle={{
            objectFit: "contain",
            objectPosition: "center center"
          }}
        />
        <a className="hover-underline">Gallery</a>
      </div>
      {showGallery ? <Gallery props={props} closerClicked={updateGalleryVisibility}/> : null}
    </React.Fragment>
  )
}

export default Carousel