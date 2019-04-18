import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby-link"

const Styled = styled.ul`
  li {
    margin-bottom: 2em;
  }

  @media (min-width: 700px) {
    li {
      margin: 4em auto;
    }
  }
`

export default function({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Styled>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <li key={node.fields.slug}>
              <h2>
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
            </li>
          )
        })}
      </Styled>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
