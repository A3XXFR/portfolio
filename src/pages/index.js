import React from "react"

import LandingHeading from "./indexComponents/LandingHeading"
import AboutContent from "./indexComponents/about"
import FeaturedProject from "./indexComponents/featuredProjects"
import Expertise from "./indexComponents/expertise"
import SoftwareSkill from "./indexComponents/SoftwareSkill"
import Footer from "../components/footer"

import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        sort: {
          fields: [frontmatter___projectName]
          order: ASC
        }
      ){
        edges {
          node {
              frontmatter {
                projectName
                projectNameGold
                projectDate
                projectAddress
                projectType
                heroImage
                thumbnail
                featured
                featuredDescription
              }
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
      allFile {
        edges {
          node {
            base
            absolutePath
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  let projects = data.allMarkdownRemark.edges
  let featuredProjects = projects.filter(project => {
    return project.node.frontmatter.featured === true
  })
  console.log(projects)
  if(featuredProjects.length > 5) {
    featuredProjects = featuredProjects.slice(0,5)
  }

  featuredProjects.map((project, index) => {
    const thumbLocation = project.node.fileAbsolutePath.substring(0, project.node.fileAbsolutePath.lastIndexOf("/"))+"/images/"+project.node.frontmatter.thumbnail;
    featuredProjects[index].thumbnail = data.allFile.edges.find(file => {
      return(file.node.absolutePath === thumbLocation)
    })
    const HeroLocation = project.node.fileAbsolutePath.substring(0, project.node.fileAbsolutePath.lastIndexOf("/"))+"/images/"+project.node.frontmatter.heroImage;
    featuredProjects[index].heroImage = data.allFile.edges.find(file => {
      return(file.node.absolutePath === HeroLocation)
    })
  })

  return (
    <React.Fragment>
      <LandingHeading projects={featuredProjects}/>
      <AboutContent/>
      <FeaturedProject projects={featuredProjects}/>
      <Expertise/>
      <SoftwareSkill/>
      <Footer/>
    </React.Fragment>
  )
}

export default IndexPage