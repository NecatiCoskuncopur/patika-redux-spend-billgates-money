import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "32px",
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 700,
    },
    fonts: {
      body: "'Inter', 'sans-serif'",
      heading: "'Lato', 'sans-serif'",
    },
    radii: {
      1: "4px",
      2: "8px",
      3: "16px",
    },
    colors: {
      main: "#ffffff",
      dark: "#333",
      color1: "#24c486",
      color2: "#f53b82",
      color3: "#f53b57",
      color4: '#2ecc71',
      color5: '#1abc9c',
      gradientSell: "linear-gradient(180deg,$color2,$color3)",
      gradientBuy: "linear-gradient(180deg,$color4, $color5)",
      disabled: "#f1f2f6",
      background: "#F1F2F6",
      borderDivider: "#b2bec3",
    },
  },
  media: {
    bp1: "(max-width: 800px)",
    bp2: "(max-width: 600px)",
  },
  utils: {
    m: (value) => ({ margin: value }),
    p: (value) => ({ padding: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
    mt: (value) => ({ marginTop: value }),
    mr: (value) => ({ marginRight: value }),
    mb: (value) => ({ marginBottom: value }),
    ml: (value) => ({ marginLeft: value }),
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
    pt: (value) => ({ paddingTop: value }),
    pr: (value) => ({ paddingRight: value }),
    pb: (value) => ({ paddingBottom: value }),
    pl: (value) => ({ paddingLeft: value }),
  },
});
