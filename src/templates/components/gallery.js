import React from "react"
import {useState} from "react"
import Img from "gatsby-image"
import galleryStyles from "./gallery.module.css"

const Gallery = (props) => {
  const images = props.props
  console.log(images)
  const [index, setIndex] = useState(0)
  const length = images.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  const setImage = (index) =>
    setIndex(index)

  const { node } = images[index]
  return (
    <div className={galleryStyles.container}>
      <div className={galleryStyles.closeButton} onClick={props.closerClicked}>&#10005;</div>
      <div className={galleryStyles.imgThumbsContainer}>
        {images.map((image, index) => {
          console.log(image.node.childImageSharp.fluid)
          return (
            <div
              onClick={() => setImage(index)}
              key={image.node.id}
            >
              <Img
                className={galleryStyles.imgThumbnail}
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[1]}
                imgStyle={{
                  objectPosition: "center center",
                }}
              />
            </div>
          )
        })}
      </div>
      <button className={galleryStyles.galleryButton} onClick={() => handlePrevious()}>&lsaquo;</button>
      <div className={galleryStyles.activeImage}>
        <Img
          className={galleryStyles.activeImageImg}
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.base.split(".")[1]}
          imgStyle={{
            objectFit: "contain",
            objectPosition: "center center"
          }}
        />
      </div>
      <button className={galleryStyles.galleryButton} onClick={() => handleNext()}>&rsaquo;</button>
    </div>
  )
}

export default Gallery