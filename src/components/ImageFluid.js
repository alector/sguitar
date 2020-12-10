import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
import ImageFluid from '../components/ImageFluid'
<Image
    src="gatsby-astronaut.png"
    alt="astronaut"
    className="w-full hidden md:block lg:-ml-8 rounded shadow-xl z-10"
/>
 */

const ImageFluid = ({ style, alt, src, className }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(img =>
    img.node.relativePath.includes(src)
  )
  if (!image) return null

  return (
    <Img
      fluid={image.node.childImageSharp.fluid}
      alt={alt}
      style={style}
      className={className}
    />
  )
}
export default ImageFluid
