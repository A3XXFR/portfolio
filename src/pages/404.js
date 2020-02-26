import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"

import NotFoundStyles from "./404.module.css"

const NotFound = () => {
  return (
    <Layout>
    <div className={NotFoundStyles.container}>
      <h1> 404 </h1>
      <h3>Page Not Found!</h3>
      <p><Link to="/" className="hover-underline">Go home</Link></p>
    </div>
    </Layout>
  )
}

export default NotFound