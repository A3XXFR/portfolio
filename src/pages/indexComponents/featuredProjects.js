import React from "react"
import featuredStyles from "./featuredProjects.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"
import ProjectCard from "../../components/project-card"
import aboutStyles from "./about.module.css"

const featuredProjectsContent = ({projects}) => {

  if(projects.length > 4) {
    projects = projects.slice(0,4)
  }

  return (
    <section className={featuredStyles.sectionContainer}>
      <h2 className="section-header">Featured <span className="gold-font">Projects</span></h2>
      <div className={featuredStyles.featuredCardsContainer}>
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
              thumbnail={node.thumbnail}
            />
          )
        })}
      </div>
      <div className={`${featuredStyles.backgroundHeading} ${featuredStyles.backgroundHeading}`}>Projects</div>
      <div className={featuredStyles.projectsButtonContainer}>
        <Link className="link-button" to="/projects/">View Project Archive</Link>
      </div>
    </section>
  )
}

export default featuredProjectsContent