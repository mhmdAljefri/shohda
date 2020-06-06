import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/MainSection"
import Martyrs from "../containers/Martyrs"

const HomeTemplate = () => (
  <Layout>
    <SEO title="الرئيسية" />
    <MainSection />
    <Martyrs heading={<h2 style={{ textAlign: "center" }}>قائمة الشهداء</h2>} />
  </Layout>
)

export default HomeTemplate
