import React from "react"

const ProjectMarkdown = ({props}) => {
  console.log(props)
  return (
    <div dangerouslySetInnerHTML={{ __html: props }}/>
  )
}

export default ProjectMarkdown