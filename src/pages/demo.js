import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DemoPage = () => (
  <div>

    <section className="flex flex-col  h-screen   bg-black">
      <header className="h-20 flex items-center  header bg-black w-full text-white">
        <div className="logo ml-5 flex-grow ">ΣΩΤΗΡΗΣ </div>
        <nav className="flex mr-5">
          <a className="px-2" href="http://www.google.com">Blog</a>
          <a className="px-2" href="http://www.google.com">Projects</a>
          <a className="px-2" href="http://www.google.com">Listen</a>
          <a className="px-2" href="http://www.google.com">Listen</a>

        </nav>

      </header>

      <div className="h-full flex flex-col justify-center items-center top-content bg-green-500 ">

        <div className="flex flex-col w-200">
           <h2 className="text-center text-white text-2xl">Section 1</h2>
           <p className="text-center text-green-200">subtitle</p>
        </div>

      </div>
    </section>



    <section className="flex flex-col  h-screen   bg-red-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-blue-500 ">

        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">Section 2</h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>

      </div>
    </section>

    <section className="flex flex-col  h-screen   bg-red-300">

      <div className="h-full flex flex-col justify-center items-center top-content bg-red-500 ">

        <div className="flex flex-col w-200">
          <h2 className="text-center text-white text-2xl">Section 3</h2>
          <p className="text-center text-green-200">subtitle</p>
        </div>

      </div>
    </section>









  </div>
)

export default DemoPage