import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/styles/link"

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
      <article>
        <h5>{post.frontmatter.date}</h5>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
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
      </article>
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
