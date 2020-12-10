import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import MainTopSection from "../components/MainPage/MainTop"
import MainFirstQuote from "../components/MainPage/MainFirstQuote"
import MainBio from "../components/MainPage/MainBio"
import MainSocialMedia from "../components/MainPage/MainSocialMedia"
import MainArgosDuo from "../components/MainPage/MainArgosDuo"
import MainVideoArgos from "../components/MainPage/MainVideoArgos"

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

    <MainTopSection />

    <MainFirstQuote />

    <MainBio />

    <MainSocialMedia />
    <MainArgosDuo />
  </Layout>
)

export default IndexPage
