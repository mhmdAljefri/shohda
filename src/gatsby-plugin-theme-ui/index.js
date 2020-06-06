export const primaryColor = "#bb1608"
export const primaryTextColor = "#c56b00"
export const lightColor = "#f8f8f8"
export const darkColor = "#090909"
export const textColor = "#666666"

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    heading: "#000",
    text: textColor,
    background: "#fff",
    light: lightColor,
    primaryTextColor,
    primary: primaryColor,
    secondary: "#489f9c",
    muted: "#f6f6f6",
    cardShadow: "rgba(0, 0, 0, 0.125)",
    modes: {
      dark: {
        heading: "#fff",
        text: "#efefef",
        background: "#000",
        light: darkColor,
        primary: primaryColor,
        secondary: "#58bfca",
        muted: "#f6f6f6",
        cardShadow: "rgba(255, 255, 255, 0.125)",
      },
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "heading",
      borderRadius: 999,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 1px ${t.colors.primary}`,
        outline: "none",
      },
    },
    select: {
      borderColor: "light",
      borderRadius: 6,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 1px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "heading",
      borderRadius: 20,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 1px ${t.colors.primary}`,
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 6,
      boxShadow: t => `0 0 8px ${t.colors.cardShadow}`,
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  text: {
    heading: {
      color: "heading",
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading",
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "caps",
    },
  },
  buttons: {
    primary: {
      color: "#000",
      bg: "primary",
      boxShadow: t => "0 14px 24px 0 " + t.colors.primary,
      "&:hover": {
        boxShadow: t => "0 0 0 0 " + t.colors.primary,
        opacity: 0.9,
      },
    },
    secondary: {
      color: "text",
      bg: "transparent",
      boxShadow: t => "0 6px 6px 0 " + t.colors.cardShadow,

      "&:hover": {
        boxShadow: t => "0 10px 20px 0 " + t.colors.cardShadow,
        opacity: 0.9,
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "heading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    h2: {
      color: "heading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    h3: {
      color: "heading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    h4: {
      color: "heading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    h5: {
      color: "heading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    h6: {
      color: "heading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    p: {
      color: "text",
    },
    a: {
      textDecoration: "none",
      color: "text",
      opacity: 0.8,
      ":hover": {
        opacity: 1,
      },
      ":active": {
        color: "primary",
      },
      ".active": {
        color: "primary",
      },
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
    li: {
      listStyle: "none",
    },
  },
}
