import React from "react"
import { graphql } from "gatsby"
import { Heading, Text, Card } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/styles/link"

export default function({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Card key={node.fields.slug} my={[5]} p={[4]}>
            <Heading fontSize={[1]} mb={[2]}>
              {node.frontmatter.date}
            </Heading>
            <Heading fontSize={[5]}>
              <Link to={node.fields.slug}>{title}</Link>
            </Heading>
            <Text
              fontSize={[2, 3]}
              mt={[2]}
              mb={[2]}
              lineHeight="1.5"
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </Card>
        )
      })}
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
