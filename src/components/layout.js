import React from "react"
import { Heading, Box } from "rebass"
import GlobalStyle from "../components/styles/globalStyles"

import Link from "../components/styles/link"

export default function({ location, children, title }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <h1>{title}</h1>
        <h5>Software Development. Learning in the Open.</h5>
      </>
    )
  } else {
    header = (
      <h4>
        <Link to={`/`}>Tanner Gaucher</Link>
      </h4>
    )
  }

  return (
    <div style={{ maxWidth: "850px", margin: "0 auto" }}>
      <GlobalStyle />
      <header>{header}</header>
      <main style={{ margin: "2rem 0" }}>{children}</main>
    </div>
  )
}
