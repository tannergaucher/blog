import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/styles/link"
import NextPrev from "../components/NextPrev"

const Styled = styled.article`
  ul {
    p {
      margin-bottom: 0;
    }
  }

  .main-text {
    margin-bottom: 2em;
  }

  @media (min-width: 700px) {
    .main-text {
      margin-bottom: 4em;
    }
  }

  /* @media (min-width: 1000px) {
    .main-text {
      margin-bottom: 6em;
    }
  } */
`

export default function({ data, pageContext, location }) {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Styled>
        <h6 className="date">{post.frontmatter.date}</h6>
        <h1>{post.frontmatter.title}</h1>
        <div
          className="main-text"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <NextPrev next={next} previous={previous} />
      </Styled>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 300)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
