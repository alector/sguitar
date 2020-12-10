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
            Born into a musical family and forged into the heart of Paris,
            Sotiris is following a path accompanied by the guitar from the very
            start that rests unchanged till this day. His repertoire is starting
            from the 16th century and reaches to music written today where he
            collaborates with new composers searching to expand the repertoire
            of the instrument. Appreciated by artists in his second home of the
            French capital he has been hailed for his original musicality and
            technique on the guitar. Edith Lejet (Prix de Rome) after listening
            to his interpretation of her own music wrote...
          </p>

          <quote>
            "I was delighted to meet the beauty and the extreme variety of
            sounds that Sotiris is able to transmit with his instrument".
          </quote>

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
