import React from "react"
import aboutStyles from "./about.module.css"

const aboutContent = () => {
  return (
    <section>
      <h2 className="section-header">About <span className="gold-font">Me</span></h2>
      <div className={aboutStyles.sectionContainer}>
        <div className={aboutStyles.aboutHalfSection}>
          <div className={aboutStyles.aboutContent}>
            <h2>Modern, Technical, Beautiful</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
              vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.</p>

            <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
        <div className={aboutStyles.aboutHalfSection}>
          <div className={aboutStyles.aboutImage}/>
          <div className={`${aboutStyles.backgroundHeading} ${aboutStyles.backgroundHeading}`}>About</div>
        </div>
      </div>
    </section>
  )
}

export default aboutContent