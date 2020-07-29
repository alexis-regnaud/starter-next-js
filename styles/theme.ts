import * as baseColors from "./baseColors";

export default {
  breakpoints: ["768px", "1025px", "1290px"],
  fonts: {
    raleway: 'Raleway, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    alegreya: "Alegreya",
    principal: "raleway",
    secondary: "alegreya",
  },
  space: [0, 8, 16, 32, 64],
  fontSizes: {
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 20,
    lg: 28,
    xl: 44,
  },
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  lineHeights: {
    text: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    heading: "0.1em",
    text: "0.05em",
  },
  colors: {
    text: "#8F9586",
    tertiaries: baseColors.greenLight,
    background: baseColors.greenLight[500],
    primaries: baseColors.green,
    primary: baseColors.green[500],
    secondaries: baseColors.greenDark,
    secondary: baseColors.greenDark[500],
    muted: "#f6f6f6",
  },
  sizes: {
    containerMd: 1024,
    containerSm: 960,
    containerXs: 860,
  },
  text: {
    text: {
      letterSpacing: "text",
      lineHeight: "text",
      fontFamily: "raleway",
    },
    text1: {
      variant: "text.text",
      fontSize: "xl",
    },
    text2: {
      variant: "text.text",
      fontSize: "lg",
    },
    text3: {
      variant: "text.text",
      fontSize: "md",
    },
    text4: {
      variant: "text.text",
      fontSize: "sm",
    },
    text5: {
      variant: "text.text",
      fontSize: "xs",
    },
    text6: {
      variant: "text.text",
      fontSize: "xxs",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    heading: {
      fontFamily: "raleway",
      lineHeight: "heading",
      fontWeight: "semiBold",
      textTransform: "uppercase",
      letterSpacing: "heading",
    },
    h1: {
      variant: "text.heading",
      fontSize: "xl",
      fontWeight: 500,
    },
    h2: {
      variant: "text.heading",
      fontSize: "lg",
      fontWeight: 600,
      marginBottom: "17px",
    },
    h3: {
      variant: "text.heading",
      fontSize: "md",
      marginBottom: "14px",
    },
    h4: {
      variant: "text.heading",
      fontSize: "sm",
      marginBottom: "12px",
    },
    h5: {
      variant: "text.heading",
      fontSize: "xs",
    },
    h6: {
      variant: "text.heading",
      fontSize: "xxs",
    },
  },
  buttons: {
    primary: {
      variant: "styles.button",
      bg: "primary",
    },
    secondary: {
      variant: "styles.button",
      bg: "secondary",
    },
  },
  forms: {
    input: {
      backgroundColor: "white",
      color: "text",
      fontSize: "xs",
      fontFamily: "raleway",
      fontWeight: "semiBold",
      letterSpacing: "text",
      borderRadius: 0,
      "&:focus": {
        outline: "none",
      },
    },
  },
  images: {
    img: {
      userDrag: "none",
    },
  },
  links: {
    nav: {
      variant: "styles.a",
      color: "white",
    },
  },
  styles: {
    root: {
      backgroundColor: "background",
      // uses the theme values provided above
      fontFamily: "raleway",
      fontWeight: "regular",
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
    button: {
      color: "white",
      bg: "secondary",
      fontSize: "xs",
      fontWeight: "semiBold",
      fontFamily: "raleway",
      textTransform: "uppercase",
      letterSpacing: "text",
      borderRadius: 0,
      outline: "none",
      "&:hover": {
        cursor: "pointer",
      },
    },
    a: {
      textTransform: "uppercase",
      fontWeight: "semiBold",
      textDecoration: "none",
      color: "text",
      "&:visited": {},
      "&:active": {},
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
};
