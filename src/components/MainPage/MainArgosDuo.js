import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import franceMusiqueSVG from "../../images/france-music-3.svg"
import franceMusiqueQuote from "../../images/france-music-quote.svg"

const MainArgosDuo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage1: file(relativePath: { eq: "argos-duo.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      placeholderImage2: file(relativePath: { eq: "france-musique-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      placeholderImage3: file(relativePath: { eq: "france-music-btn.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      placeholderImage4: file(relativePath: { eq: "red-quotes.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imgData1 = data.placeholderImage1.childImageSharp.fluid
  const imgData2 = data.placeholderImage2.childImageSharp.fluid
  const imgData3 = data.placeholderImage3.childImageSharp.fluid
  const imgData4 = data.placeholderImage4.childImageSharp.fluid

  return (
    <section id="argos-duo">
      <div className="left">
        <div className="blank-upper"></div>
        <div className="upper">
          <h2 className="title">ARGOS DUO</h2>

          <div className="names">
            <p className="name">
              <strong>Julien Beautemps</strong>, accordéon
            </p>
            <p className="name">
              <strong>Sotiris Athanasiou</strong>, guitare
            </p>
          </div>
        </div>

        <div className="down">
          <div className="red"></div>
          <div className="img-content">
            <Img
              fluid={imgData1}
              objectFit="cover"
              className="instagram-group-photo"
              alt="Sotiris Instagram"
            />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="blank-upper">
          <div className="fr-logo-container">
            <Img
              fluid={imgData2}
              className="france-musique-logo"
              alt="Sotiris Instagram"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="lower">
          <div className="title">PRESENTATION</div>

          <div className="line">
            <div className="left-line">
              <a
                href="https://www.francemusique.fr/emissions/generations-france-musique-le-live/carte-blanche-a-philippe-cassard-avec-natalie-dessay-89460"
                className="img-link"
                target="_blank"
              >
                <img src={franceMusiqueSVG} className="fr-music-play" />
              </a>
              <a
                href="https://www.francemusique.fr/emissions/generations-france-musique-le-live/carte-blanche-a-philippe-cassard-avec-natalie-dessay-89460"
                className="img-link"
                target="_blank"
              >
                <img src={franceMusiqueQuote} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainArgosDuo
