/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { RevealGlobalStyles } from "react-genie"
import { Global } from "@emotion/core"

import { css } from "theme-ui"
import useLang from "../hooks/useLang"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, moonMaskColor, style, ...props }) => {
  const language = useLang()

  return (
    <>
      <RevealGlobalStyles />

      {language === "en" ? (
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css?family=Poppins|Roboto&display=swap");
          `}
        />
      ) : (
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css?family=Tajawal|Cairo&display=swap");
            body {
              direction: rtl;
              font-family: "Cairo", sans-serif !important;
            }
          `}
        />
      )}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
