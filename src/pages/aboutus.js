/** @jsx jsx */
import Layout from "../components/layout"
import { Box, jsx } from "theme-ui"

export default function Aboutus() {
  return (
    <Layout>
      <h1 style={{ marginTop: 145, textAlign: "center" }}>نبذه عن الموقع</h1>
      <Box
        sx={{ maxWidth: 720, mx: "auto", px: 5, py: 3, textAlign: "center" }}
      >
        <p>تم تصميم وتطوير هذا الموقع تخليداً لذكرا شُهدائنا الميامين</p>
        <p>
          الذين سطروا اقوى الملاحم في سبيل استعادة دولتهم ورسموا{" "}
          <span sx={{ color: "primary" }}>بدمائهم</span> ملامح الاستقلال
          لجمهورية اليمن الديموقراطية الشعبية
        </p>
      </Box>
    </Layout>
  )
}
