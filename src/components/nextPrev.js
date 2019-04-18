import React from "react"
import Link from "./styles/Link"

export default function nextPrev({ next, previous }) {
  return (
    <ul>
      {previous && (
        <li>
          <h4>
            <Link to={previous.fields.slug} rel="prev">
              Next: {previous.frontmatter.title}
            </Link>
          </h4>
        </li>
      )}
      {next && (
        <li>
          <h4>
            <Link to={next.fields.slug} rel="next">
              Previous: {next.frontmatter.title}
            </Link>
          </h4>
        </li>
      )}
    </ul>
  )
}
