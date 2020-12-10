import React, { Component } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const MainFirstQuote = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderBgImage: file(
        relativePath: { eq: "quote-bgd-small-box.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      placeholderQuoteImage: file(relativePath: { eq: "quote-icon.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const imgBgData = data.placeholderBgImage.childImageSharp.fluid
  const imgQuoteData = data.placeholderQuoteImage.childImageSharp.fixed

  return (
    <BackgroundImage
      fluid={imgBgData}
      Tag="section"
      id="quote-section"
      className={className}
    >
      <div className="container">
        <Img
          fixed={imgQuoteData}
          objectFit="cover"
          className="quote-icon"
          alt=""
        />
        <div className="text">
          {`Music is a moral law. It gives soul to the universe \n wings to the mind.`}
        </div>

        <div className="horizontal-bar"></div>

        <div className="author">Plato</div>
      </div>
    </BackgroundImage>
  )
}

export default MainFirstQuote
