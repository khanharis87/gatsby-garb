import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"

const PostTemplate = ({ data }) => (
  <Layout>
    <h2>{data.markdownRemark.frontmatter.title}</h2>
    <span>
      <i>
        {data.markdownRemark.timeToRead}{" "}
        {data.markdownRemark.timeToRead === 1 ? "minute " : "minutes "}
        to read
      </i>
    </span>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`
export default PostTemplate
