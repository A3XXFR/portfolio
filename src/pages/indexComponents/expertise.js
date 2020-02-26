import React from "react"
import expertiseStyles from "./expertise.module.css"

const expertise = () => {
  return (
    <section>
      <h2 className="section-header">My <span className="gold-font">Expertise</span></h2>
      <div className={expertiseStyles.cardsSectionContainer}>
        <div className={expertiseStyles.card}>
          <div className={expertiseStyles.imgOverlay}>
            <div>
              <div className={expertiseStyles.title}>
                <h3>Architecture And <br/> BIM</h3>
              </div>
              <div className={expertiseStyles.verticalText}>Primary Focus</div>
            </div>
          </div>
        </div>
        <div className={expertiseStyles.card}>
          <div className={expertiseStyles.imgOverlay}>
            <div>
              <div className={expertiseStyles.title}>
                <h3>3D <br/> Modeling</h3>
              </div>
              <div className={expertiseStyles.verticalText}>Primary Focus</div>
            </div>
          </div>
        </div>
        <div className={expertiseStyles.card}>
          <div className={expertiseStyles.imgOverlay}>
            <div>
              <div className={expertiseStyles.title}>
                <h3>3D Printing & Model <br/> Fabrication</h3>
              </div>
              <div className={expertiseStyles.verticalText}>Primary Focus</div>
            </div>
          </div>
        </div>
        <div className={expertiseStyles.card}>
          <div className={expertiseStyles.imgOverlay}>
            <div>
              <div className={expertiseStyles.title}>
                <h3>Programming and <br/> Web Design</h3>
              </div>
              <div className={expertiseStyles.verticalText}>Secondary Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default expertise