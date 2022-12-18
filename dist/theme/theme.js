"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@mui/material/styles");
// A custom theme for this app
const theme = (0, _styles.createTheme)({
  colorMenu: '#fff',
  palette: {
    // primary: {
    //   main: '#57E1C1',
    // },
    // type: "dark",
    mode: 'dark',
    gray: {
      main: '#B1B6C0',
      contrastText: "#000"
    },
    success: {
      main: '#19CB99'
    },
    action: {
      main: '#daa081'
    },
    secondary: {
      main: '#db3131'
    },
    error: {
      main: '#FF5E73'
    },
    warning: {
      main: '#FFC64F'
    },
    // background: {
    //   default: '#fff',
    // },
    primary: {
      main: "#7E94FF"
      // dark: "#57E1C1",
      // light: "#57E1C1",
      // contrastText: "#57E1C1",
    },

    shadows: ["2px 2px 2px red"],
    background: {
      default: "#1D3058",
      paper: "#1D3058"
    },
    text: {
      primary: '#fff',
      secondary: "#fff",
      red: '#db3131'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '7.75px 16px',
          borderRadius: '8px',
          boxShadow: 'none !important'
          // fontSize:'1rem !important'
        }
      }
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          // apply theme's border-radius instead of component's default
          padding: '7.75px 16px',
          "&:before": {
            borderBottom: "1px solid yellow "
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "red"
        }
      }
    },
    MuiTab: {
      root: {
        styleOverrides: {
          indicator: {
            backgroundColor: "red !important"
          }
        },
        indicator: {
          backgroundColor: "red !important"
        }
      },
      indicator: {
        backgroundColor: "red !important"
      },
      styleOverrides: {
        indicator: {
          backgroundColor: "red !important"
        }
      }
    },
    // MuiTabs: {
    //   root: {
    //     styleOverrides: {
    //       indicator: {backgroundColor: "red !important"},
    //
    //
    //     },
    //     indicator: {backgroundColor: "red !important"},
    //   },
    //   indicator:  "red !important" ,
    //   styleOverrides: {
    //     indicator: {
    //       backgroundColor: 'orange',
    //       height: 3,
    //     },
    //   },
    // },
    PrivateTabIndicator: {
      root: {
        primary: {},
        styleOverrides: {
          indicator: {
            backgroundColor: "red !important"
          }
        },
        indicator: {
          backgroundColor: "red !important"
        }
      },
      indicator: {
        backgroundColor: "red !important"
      },
      styleOverrides: {
        indicator: "red !important"
      }
    }
  }
});
var _default = theme;
exports.default = _default;