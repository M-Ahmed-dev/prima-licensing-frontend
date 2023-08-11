import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#56C5D0",
    secondary: "#39808B",
    secondaryLight: "#5BA4AF",
    orange: "#F2AE28",
    darkGray: "#252020",
    gray: "#393637",
    white: "#FEFEFE",
    red: "#CD2D37",
  },

  fonts: {
<<<<<<< HEAD
    h1: {
      fontWeight: "700",
      fontSize: "25px",
      textTransform: "uppercase",
    },

    subHeading: {
      fontFamily: "Roboto",
      color: "darkGray",
      fontSize: "20px",
      fontWeight: "700",
    },

    tealParagraph: {
=======
    fontFamily: "Roboto",
    h1: {
      fontWeight: "700",
      fontSize: "25px",
      color: "darkGray",
      textTransform: "uppercase",
    },
    subHeading: {
      fontWeight: "700",
      fontSize: "20px",
      color: "darkGray",
    },
    tealParagraph: {
      fontWeight: "700",
      fontSize: "18px",
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
      color: "secondary",
      lineHeight: "normal",
    },
    paragraph: {
      fontWeight: "400",
      fontSize: "18px",
      color: "darkGray",
      lineHeight: "normal",
    },
<<<<<<< HEAD

    unorderedList: {
      fontFamily: "Roboto",
      lineHeight: "normal",
      color: "darkGray",
    },

    versionDate: {
      fontFamily: "Inter",
      color: "secondaryLight",
    },
=======
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
  },

  buttons: {
    primary: {
      bg: "secondary",
      color: "white",
      fontWeight: "700",
<<<<<<< HEAD
      width: "100%",
      borderRadius: "none",
      padding: "20px",
      fontSize: "22px",
=======
      fontSize: "22px",
      width: "100%",
      borderRadius: "none",
      padding: "20px",
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
      textTransform: "uppercase",
    },

    secondary: {
      bg: "white",
      border: "3px solid #39808B",
      color: "secondary",
      width: "100%",
      fontWeight: "700",
      fontSize: "22px",
      borderRadius: "none",
      padding: "20px",
      textTransform: "uppercase",
    },
    delete: {
      bg: "red",
      color: "white",
      fontWeight: "700",
      fontSize: "22px",
      width: "100%",
      borderRadius: "none",
      padding: "20px",
      textTransform: "uppercase",
    },
    primarySmall: {
      bg: "secondary",
      color: "white",
<<<<<<< HEAD
      borderRadius: "none",
      textTransform: "uppercase",
=======
      fontWeight: "700",
      borderRadius: "none",
      textTransform: "uppercase",
      minHeight: "35px",
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
      width: "100%",
    },
    secondarySmall: {
      width: "100%",
<<<<<<< HEAD
      bg: "white",
      color: "secondary",
      borderRadius: "none",
      textTransform: "uppercase",
    },
    addZip: {
=======
      height: "35px",
      bg: "white",
      border: "3px solid #39808B",
      color: "secondary",

    },
    addZip: {
      border: "3px solid #39808B",
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
      color: "secondary",
      textTransform: "uppercase",
      borderRadius: "none",

      fontWeight: "700",
      fontSize: "15px",
<<<<<<< HEAD
=======
      height: "35px",
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
      width: "100%",
    },
    discardSm: {
      bg: "red",
      color: "white",
      textTransform: "uppercase",
      borderRadius: "none",
      fontWeight: "700",
      fontSize: "15px",
<<<<<<< HEAD
=======
      height: "35px",
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
      width: "100%",
    },
    saveSm: {
      bg: "secondary",
      color: "white",
      borderRadius: "none",
      textTransform: "uppercase",
      fontWeight: "700",
      fontSize: "15px",
<<<<<<< HEAD
=======
      height: "35px",
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
      width: "100%",
    },
  },

  SwitchToggle: {
    track: {
      bg: "darkGray",
    },
  },
});

export default theme;
