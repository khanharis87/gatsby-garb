import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const ProductTemplate = ({ data: { contentfulProduct }, location }) => (
  <Layout>
    <div style={{ marginLeft: "0 auto", width: "100%", textAlign: "center" }}>
      <h2>
        {contentfulProduct.name} -{" "}
        <span style={{ color: "#ccc" }}>
          Added on {contentfulProduct.createdAt}
        </span>
      </h2>
      <p>{contentfulProduct.description}</p>
      <button
        style={{
          background: "darkorange",
          color: "white",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        className="snipcart-add-item"
        data-item-id={contentfulProduct.slug}
        data-item-price={contentfulProduct.price}
        data-item-image={contentfulProduct.image.file.url}
        data-item-name={contentfulProduct.name}
        data-item-url={location.pathname}
      >
        Add to cart
      </button>
      <Img
        fluid={contentfulProduct.image.fluid}
        style={{ margin: "0 auto", maxWidth: "600px" }}
      />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      slug
      price
      description
      createdAt(formatString: "MMMM Do, YYYY, h:mm:ss a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`
export default ProductTemplate
