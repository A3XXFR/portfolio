import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectCard from "../components/project-card"

import projectStyles from "./project.module.css"

const projectsPage = ({data}) => {
  const projects = data.allMarkdownRemark.edges
  const files =  data.allFile.edges

  projects.map((project, index) => {
    const thumbLocation = project.node.fileAbsolutePath.substring(0, project.node.fileAbsolutePath.lastIndexOf("/"))+"/images/"+project.node.frontmatter.thumbnail;
    projects[index].thumbnail = files.find(file => {
      return(file.node.absolutePath === thumbLocation)
    })
  })

  return (
    <Layout>
      <div className={projectStyles.largeTitle}> Projects </div>
      <div className={projectStyles.cardsContainer}>
        {projects.map((node) => {
          return (
            <ProjectCard
              key={node.node.id}
              slug={node.node.fields.slug}
              projectName={node.node.frontmatter.projectName}
              projectNameGold={node.node.frontmatter.projectNameGold}
              projectDate={node.node.frontmatter.projectDate}
              projectAddress={node.node.frontmatter.projectAddress}
              projectType={node.node.frontmatter.projectType}
              thumbnail={node.thumbnail}/>
          )
        })}
      </div>
    </Layout>
  )
}

export default projectsPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
            frontmatter {
              projectName
              projectNameGold
              projectDate
              projectAddress
              projectType
              thumbnail
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
          absolutePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
}`