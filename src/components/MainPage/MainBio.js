import React, { Component } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const MainBio = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage1: file(relativePath: { eq: "sotiris-bio-photo.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      placeholderImage2: file(relativePath: { eq: "conservatoire-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const dataImg1 = data.placeholderImage1.childImageSharp.fluid
  const dataImg2 = data.placeholderImage2.childImageSharp.fluid

  return (
    <section id="bio-section">
      <div className="left-column">
        <div className="title">Sotiris Athanasiou</div>
        <div className="text">
          <p>
            Sotiris started learning the guitar at the age of 4 with his father,
            he graduated from the Conservatory of Macedonia in the class of
            Fotis Baxes with the highest honors. The Conservatoire of Bordeaux
            was his next stop and after a brief span in Seville in the class of
            Francisco Bernier he graduated from the Conservatoire de Paris with
            the highest honors in the classs of Olivier Chassain. Today he is
            pursuing his Master in the Conservatoire with Tristan Manoukian.
          </p>
          <p>
            In 2020 a new chapter has been started in Sotiris’s life with the
            creation of the ”Argos Duo’’with the accordionist Julien Beautemps
            focusing on 21st century music, improvisation and creation as well
            as his duo with the flutist Stathis Karapanos focusing on original
            repertoire for the formation. His project of creating a completely
            new cycle of repertoire for the guitar inspired by his passion,
            Greek Mythology collaborating with composers of 4 different
            continents is going to be his subject for his first CD and coming
            recitals.
          </p>

          <Img
            fluid={dataImg2}
            objectFit="cover"
            className="conservatoire-logo"
            alt="Logo de Conservatoire de Paris"
          />
        </div>
      </div>

      <div className="right-column">
        <Img
          fluid={dataImg1}
          objectFit="cover"
          className="bio-photo"
          alt="Sotiris Athanasiou"
        />
      </div>
    </section>
  )
}

export default MainBio
