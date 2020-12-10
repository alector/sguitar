import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
//insta-group-photos.png
const MainSocialMedia = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderBgImage: file(
        relativePath: { eq: "bgd-section-social-media-opacity.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      placeholderImage2: file(relativePath: { eq: "insta-group-photos.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      placeholderImage3: file(relativePath: { eq: "insa-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imgBgData = data.placeholderBgImage.childImageSharp.fluid
  const imgData2 = data.placeholderImage2.childImageSharp.fluid
  const imgData3 = data.placeholderImage3.childImageSharp.fluid

  return (
    <BackgroundImage
      fluid={imgBgData}
      Tag="section"
      id="social-media-section"
      className={className}
      // className="flex flex-col h-screen"
      backgroundColor={`#fff`}
    >
      <div className="left-column"> </div>
      <div className="right-column">
        <a
          href="https://www.instagram.com/sotiris_guitar/"
          className="img-link"
          target="_blank"
        >
          <Img
            fluid={imgData2}
            objectFit="cover"
            className="instagram-group-photo"
            alt="Sotiris Instagram"
          />
        </a>
        <a
          href="https://www.instagram.com/sotiris_guitar/"
          target="_blank"
          className="img-link"
        >
          <Img
            fluid={imgData3}
            objectFit="cover"
            className="instagram-logo"
            alt="Sotiris Instagram"
          />
        </a>
      </div>
    </BackgroundImage>
  )
}

export default MainSocialMedia
