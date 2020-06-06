import React from "react"
import { Box } from "theme-ui"

export default function Button(props) {
  return (
    <Box
      as="button"
      variant="buttons.primary"
      {...props}
      __css={{
        transition: "all 200ms",
        appearance: "none",
        cursor: "pointer",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 999,
      }}
    />
  )
}
