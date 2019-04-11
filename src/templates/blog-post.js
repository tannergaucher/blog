import React from "react"
import { graphql } from "gatsby"
import { Heading, Text, Box, Card } from "rebass"

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
      <Card
        bg="#fff"
        p={[4]}
        my={[5]}
        borderRadius="16px"
        boxShadow="0 10px 30px rgba(0, 0, 0, .1)"
      >
        <Heading fontSize={[1]} mb={[3]} color="rgba(14,30,37,.54)">
          {post.frontmatter.date}
        </Heading>
        <Heading fontSize={[6]} color="">
          {post.frontmatter.title}
        </Heading>

        <Text
          fontSize={[2, 3]}
          my={[5]}
          lineHeight="1.8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <Box as="ul" style={{ listStyle: "none" }}>
          {previous && (
            <li>
              <Heading my={[4]} fontSize={[3]}>
                <Link to={previous.fields.slug} rel="prev">
                  Next post: {previous.frontmatter.title}
                </Link>
              </Heading>
            </li>
          )}
          {next && (
            <li>
              <Heading my={[4]} fontSize={[3]}>
                <Link to={next.fields.slug} rel="next">
                  Previous post: {next.frontmatter.title}
                </Link>
              </Heading>
            </li>
          )}
        </Box>
      </Card>
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
