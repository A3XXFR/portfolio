import React, { useState } from "react"
import detailContainerStyles from "./detailComponent.module.css"

import ProjectMarkdown from "./ProjectMarkdown"
import ProjectStatistics from "./ProjectStatistics"
import ProjectDownloads from "./ProjectDownloads"

const DetailsContainer = ({props}) => {
  const html = props.data.markdownRemark.html
  const projectStatistics = props.data.markdownRemark.frontmatter.projectStats
  // Build tabs Object {1:(tabName, component)}
  const tabs = [
    {
      tabName: "Overview",
      component: <ProjectMarkdown props={html}/>
    },
    {
      tabName: "Project Statistics",
      component: <ProjectStatistics props={projectStatistics}/>
    },
    /*{
      tabName: "Downloads",
      component: <ProjectDownloads/>
    }*/
  ]
  // Set currentTab state
  // Handle tab Change

  const [index, setIndex] = useState(0)
  const length = tabs.length - 1

  const SetTab = (index) =>
    setIndex(index)

  const currentTab = tabs[index]

  return (
    <div className={detailContainerStyles.detailsContainer}>
      <div className={detailContainerStyles.detailsNavigation}>
        <div>
          {tabs.map((tab, mapIndex) => {
            return (
              <div className={`${detailContainerStyles.navItem} hover-underline`} onClick={()=>setIndex(mapIndex)}><h3>{tab.tabName}</h3></div>
            )
          })}
        </div>
      </div>
      <div className={detailContainerStyles.contentContainer}>
        {currentTab.component}
      </div>
    </div>
  )
}

export default DetailsContainer