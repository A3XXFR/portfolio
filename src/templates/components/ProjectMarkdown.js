import React from "react"

const ProjectMarkdown = ({props}) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props }}/>
    </div>
  )
}

export default ProjectMarkdown