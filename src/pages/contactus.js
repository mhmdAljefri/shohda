import React from "react"
import Layout from "../components/layout"
import { Box } from "theme-ui"
import SEO from "../components/seo"

export default function Contactus() {
  return (
    <Layout>
      <SEO title="نموذج التواصل معنا" />
      <h1 style={{ marginTop: 145, textAlign: "center" }}>
        نموذج التواصل معنا
      </h1>
      <Box
        sx={{ maxWidth: 720, mx: "auto", px: 5, py: 3, textAlign: "center" }}
      >
        <p>لازلنا نعمل على هذه الصفحة</p>
      </Box>
    </Layout>
  )
}
