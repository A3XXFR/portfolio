import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"

import ProjectPageHero from "./components/projectPageHero"
import DetailsContainer from "./components/detailsContainer"
import Carousel from "./components/carousel"

const Project = (props) => {
  const heroImg = props.data.images.edges.find(image => image.node.base === props.data.markdownRemark.frontmatter.heroImage);
  const heroData = {
    projectName: props.data.markdownRemark.frontmatter.projectName + " " + props.data.markdownRemark.frontmatter.projectNameGold,
    projectDate: props.data.markdownRemark.frontmatter.projectDate,
    projectAddress: props.data.markdownRemark.frontmatter.projectAddress,
    heroImg: heroImg,
    tags: "",
  }
  console.log(props.data.images.edges)
  return (
    <Layout>
      <ProjectPageHero props={heroData} />
      <DetailsContainer props={props}/>
      <Carousel props={props.data.images.edges}/>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query (
    $slug: String!,
    $imgPath: String!,
    $downloads: String!
    $drawingsPath: String!
  ) 
  {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) 
    {
      frontmatter {
        projectName
        projectNameGold
        projectDate
        projectAddress
        heroImage
        thumbnail
      }
      html
    }
    images: allFile (
      sort: { fields: name, order: ASC }
      filter: {
      dir: {
          eq: $imgPath
        }
    }) 
    {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    drawings: allFile (
      sort: { fields: name, order: ASC }
      filter: {
      dir: {
          eq: $drawingsPath
        }
    }) 
    {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              originalName
            }
          }
        }
      }
    }
    downloads: allFile (
      sort: { fields: name, order: ASC }
      filter: {
      dir: {
          eq: $downloads
        }
    }) 
    {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              originalName
            }
          }
        }
      }
    }
  }
`