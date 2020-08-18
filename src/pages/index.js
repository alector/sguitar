import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  color: goldenrod;
  a {
    text-decoration: none;
    color: coral;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />




<section id="sotiris" className="flex flex-col  h-screen   bg-red-300">

  <div className="h-full flex flex-col justify-center items-center top-content bg-blue-500 ">
    <div className="flex flex-col w-200">
      <h2 className="text-center text-white text-2xl">SOTIRIS PRESENTATION</h2>
      <p className="text-center text-green-200">subtitle</p>
    </div>
  </div>

</section>

    <section id="quote" className="flex flex-col  h-screen   bg-red-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-green-500 ">
        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">Quote</h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>
      </div>

    </section>

    <section id="listen" className="flex flex-col  h-screen   bg-blue-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-red-500 ">
        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">Listen to me ( Spotify playlist) </h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>
      </div>

    </section>


    <section id="social" className="flex flex-col  h-screen   bg-blue-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-blue-500 ">
        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">SOCIAL MEDIA (INSTAGRAM) </h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>
      </div>

    </section>


    <section id="biography" className="flex flex-col  h-screen   bg-blue-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-green-500 ">
        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">BIOGRAPHY </h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>
      </div>

    </section>

    <section id="projects" className="flex flex-col  h-screen   bg-blue-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-gray-500 ">
        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">PROJECTS </h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>
      </div>

    </section>

    <section id="teaching" className="flex flex-col  h-screen   bg-blue-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-red-500 ">
        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">TEACHING </h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>
      </div>

    </section>


  </Layout>
)

export default IndexPage
