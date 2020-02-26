import React from "react"
import ProjectStatisticsStyles from "./ProjectStatisticsStyles.module.css"

const ProjectStatistics = ({props}) => {
  console.log(props)
  props.map(prop => {console.log(prop)})
  return (
    <div className={ProjectStatisticsStyles.container}>
     { props.map(prop => {
       console.log(prop)
       return (
         <div className={ProjectStatisticsStyles.item}>
           <div className={ProjectStatisticsStyles.key}>{prop.name}</div>
           <div className={ProjectStatisticsStyles.value}>{prop.value}</div>
         </div>
       )
     })}
    </div>
  )
}

export default ProjectStatistics