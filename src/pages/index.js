import React from "react"
import Layout from "../components/themes/layout"
import SEO from "../components/organisms/seo"
import Banner from "../components/organisms/banner"
import Content from "../components/organisms/content"
import OurValues from "../components/organisms/our-values"
import Offer from "../components/organisms/offer"
import PraticeAreas from "../components/organisms/pratice-areas"
import Schedule from "../components/organisms/schedule"
import ContactUs from "../components/organisms/contact-us"
import BlogResume from "../components/organisms/blog-resume"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <OurValues />
    <Offer />
    <PraticeAreas />
    <Schedule />
    <ContactUs />
  </Layout>
)

export default IndexPage
