import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import { useStaticQuery } from "gatsby"

export default () => {
  const imageData = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            relativePath
            extension
            size
            birthTime
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>Hello World bay </div>
      <Link to="/page-2">Go to page-2</Link>
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Extension</th>
            <th>Size</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {imageData.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.extension}</td>
              <td>{node.size}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
