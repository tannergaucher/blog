import React from "react"
import { Heading, Box } from "rebass"

import Link from "../components/styles/link"
import "./layout.css"

export default function({ location, children, title }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <Heading fontSize={[4]}>
        <Link to={`/`}>{title}</Link>
      </Heading>
    )
  } else {
    header = (
      <Heading fontSize={[4]} color="rgba(14,30,37,.54)">
        <Link to={`/`}>Tanner Gaucher</Link>
      </Heading>
    )
  }

  return (
    <>
      <Box as="header" m={[2]}>
        {header}
      </Box>
      <Box style={{ maxWidth: "800px", margin: "0 auto" }} p={[2, 3]}>
        <Box as="main">{children}</Box>
      </Box>
    </>
  )
}
