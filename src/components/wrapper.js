// @jsx jsx
import { jsx } from "theme-ui"
import React from "react"

export default function Wrapper({ style, ...props }) {
  return (
    <div
      sx={{ ...style, maxWidth: [800, 1200], padding: [2, 1], margin: "auto" }}
      {...props}
    />
  )
}
