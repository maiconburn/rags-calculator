import { createMuiTheme } from "@material-ui/core/";
import red from "@material-ui/core/colors/red";
import "fontsource-roboto";

const defaultTheme = createMuiTheme({
  palette: {
    base: {
      main: "#FFF",
    },
    primary: {
      main: "#185d24",
    },
    secondary: {
      main: "#1F792F",
    },
    error: {
      main: red.A400,
    },
  },
});

const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "5rem",
        [breakpoints.down("xs")]: {
          fontSize: "3rem",
        },
      },
    },
  },
};

export default theme;
