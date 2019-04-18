import React from "react"
import styled from "styled-components"
import GlobalStyle from "../components/styles/globalStyles"
import Link from "gatsby-link"

const Main = styled.main`
  max-width: 850px;
  margin: 2em auto;

  @media (min-width: 700px) {
    margin: 4em auto;
  }
`

export default function({ location, children, title }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <h4 style={{ marginTop: 0, marginBottom: "0" }}>{title}</h4>
        <h6 style={{ marginTop: 0 }}>
          Software Development. Learning in the Open.
        </h6>
        {/* <a href="http://www.github.com/tannergaucher">Github</a> */}
      </>
    )
  } else {
    header = (
      <h4 style={{ marginTop: 0 }}>
        <Link to={`/`}>Tanner Gaucher</Link>
      </h4>
    )
  }

  return (
    <div style={{ padding: ".5em" }}>
      <header>{header}</header>
      <GlobalStyle />
      <Main>{children}</Main>
    </div>
  )
}
