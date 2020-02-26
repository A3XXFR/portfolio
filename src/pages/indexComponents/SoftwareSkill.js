import React from "react"
import softwareSkillStyle from "./softwareSkill.module.css"

const softwareSkill = () => {
  return (
    <section id="software-skillset">
      <h2 className="section-header"><span className="gold-font">Software</span> Skill Set</h2>
      <div className={softwareSkillStyle.container}>
        <div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`autodesk-revit-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Autodesk Revit</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`autodesk-autocad-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Autodesk AutoCAD</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`mcneel-rhinoceros-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Mcneel Rhinoceros</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`graphisoft-archicad-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Graphisoft Archicad</h3>
          </div>
        </div>
        <div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`adobe-illustrator-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Adobe Illustrator</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`adobe-photoshop-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Adobe Photoshop</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`adobe-premiere-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Adobe Premiere</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`adobe-after-effects-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Adobe After Effects</h3>
          </div>
        </div>
        <div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`microsoft-office-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Microsoft Office</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`lumion-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Lumion</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`chaos-group-vray-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Chaos group Vray</h3>
          </div>
          <div className={softwareSkillStyle.skillItem}>
            <div className={`mcneel-grasshopper-icon ${softwareSkillStyle.skillIcon}`}/>
            <h3>Mcneel Grasshopper</h3>
          </div>
        </div>
        <div className={`${softwareSkillStyle.backgroundHeading} ${softwareSkillStyle.backgroundHeading}`}>Software</div>
      </div>
    </section>
  )
}

export default softwareSkill