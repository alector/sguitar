import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const MainTopSectionCode = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderBgImage: file(
        relativePath: { eq: "bgd-sotiris-resital.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imgBgData = data.placeholderBgImage.childImageSharp.fluid
  return (
    <BackgroundImage
      fluid={imgBgData}
      Tag="section"
      id="sotiris"
      className={className}
      // className="flex flex-col h-screen"
    ></BackgroundImage>
  )
}

const MainTopSection = styled(MainTopSectionCode)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
`

export default MainTopSection
