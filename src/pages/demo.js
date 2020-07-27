import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Headroom from "react-headroom"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DemoPage = () => (
  <div>

    <section className="flex flex-col  h-screen   bg-black">

      <Headroom>
        <div className="h-20 flex items-center  header bg-black w-full text-white">
          <div className="logo ml-5 flex-grow ">ΣΩΤΗΡΗΣ </div>
          <nav className="flex mr-5 uppercase">
            <AnchorLink className="px-2" to="/demo#blog" title="Our team" stripHash><span>Blog</span></AnchorLink>
            <AnchorLink className="px-2" to="/demo#projects" title="Our team" stripHash><span>Projects</span></AnchorLink>
            <a className="px-2" href="http://www.google.com">Listen</a>
            <a className="px-2" href="http://www.google.com">Listen</a>
          </nav>

        </div>
      </Headroom>

    <div className="h-full flex flex-col justify-center items-center top-content bg-green-500 ">

        <div className="flex flex-col w-200">
           <h2 className="text-center text-white text-2xl">Section 1</h2>
           <p className="text-center text-green-200">subtitle</p>
        </div>

      </div>
    </section>



    <section id="blog" className="flex flex-col  h-screen   bg-red-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-blue-500 ">

        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">BLOG</h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>

      </div>
    </section>

    <section id="projects" className="flex flex-col  h-screen   bg-red-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-red-500 ">

        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">PROJECTS</h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>

      </div>
    </section>









  </div>
)

export default DemoPage