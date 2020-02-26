import React from "react"

const ProjectMarkdown = ({props}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props }}/>
  )
}

export default ProjectMarkdown