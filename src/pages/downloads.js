import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import downloads from "./downloads.module.css"

const downloadsPage = () => {
  return (
    <Layout>
      <Head
        title="About"
        description="Download Farasat Mirza portfolio and research papers."
      />
      <div className={downloads.heading}> Downloads </div>
      <div className={downloads.downloadCardContainer}>
        <a  className={downloads.downloadCard} href={`Farasat Mirza - Portfolio - webdl.pdf`} download>
          <div className={downloads.nameAndDescription}>
            <p>Portfolio</p>
            <sub>Download a high quality print version of my portfolio as a pdf.</sub>
          </div>
          <span className={downloads.downloadButton}>&#10515;</span>
        </a>
        <a className={downloads.downloadCard} href={`Farasat Mirza - Thesis - Airport Design.pdf`} download>
          <div className={downloads.nameAndDescription}>
            <p>Thesis: Designing a Next Generation Airport</p>
            <sub>Download my full thesis as a pdf.</sub>
          </div>
          <span className={downloads.downloadButton}>&#10515;</span>
        </a>
      </div>

    </Layout>
  )
}

export default downloadsPage