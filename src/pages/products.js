import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Products = ({ data: { allContentfulProduct } }) => (
  <Layout>
    <div>
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id}>
          <h2>Gatsby Garb</h2>
          <Link
            to={`/products/${product.slug}`}
            style={{ textDecoration: "none", color: "#551a8b" }}
          >
            <h3>
              {product.name}.{" "}
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  color: "#f60",
                }}
              >
                ${product.price}
              </span>
            </h3>
          </Link>
          <Img style={{ maxWidth: "400px" }} fluid={product.image.fluid} />
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Products
