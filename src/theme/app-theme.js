/* eslint-disable */
 export default {
  "palette": {
    "black": "#000",
    "white": "#fff",
    "primary": {
      "main": "#1976d2",
      "light": "#42a5f5",
      "dark": "#1565c0",
      "contrastText": "#fff"
    },
    "secondary": {
      "main": "#9c27b0",
      "light": "#ba68c8",
      "dark": "#7b1fa2",
      "contrastText": "#fff"
    },
    "error": {
      "main": "#d32f2f",
      "light": "#ef5350",
      "dark": "#c62828",
      "contrastText": "#fff"
    },
    "warning": {
      "main": "#ed6c02",
      "light": "#ff9800",
      "dark": "#e65100",
      "contrastText": "#fff"
    },
    "info": {
      "main": "#0288d1",
      "light": "#03a9f4",
      "dark": "#01579b",
      "contrastText": "#fff"
    },
    "success": {
      "main": "#2e7d32",
      "light": "#4caf50",
      "dark": "#1b5e20",
      "contrastText": "#fff"
    },
    "grey": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "A100": "#212121",
      "A200": "#eee",
      "A400": "#bdbdbd",
      "A700": "#616161"
    },
    "blue": {
      "50": "#E3F2FD",
      "100": "#BBDEFB",
      "200": "#90CAF9",
      "300": "#64B5F6",
      "400": "#42A5F5",
      "500": "#2196F3",
      "600": "#1E88E5",
      "700": "#1976D2",
      "800": "#0D47A1",
      "A100": "#82B1FF",
      "A200": "#448AFF",
      "A400": "#2979FF",
      "A700": "#f6fafd",
      "A7005": "#8cbae8"
    }
  },
  "components": {
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "position": "relative",
          "boxSizing": "border-box",
          "outline": "0",
          "border": "0",
          "margin": "0",
          "cursor": "pointer",
          "userSelect": "none",
          "verticalAlign": "middle",
          "textDecoration": "none",
          "fontFamily": "'Roboto','Helvetica','Arial,sans-serif'",
          "fontWeight": "500",
          "fontSize": "0.875rem",
          "lineHeight": "1.75",
          "letterSpacing": "0.02857em",
          "textTransform": "uppercase",
          "minWidth": "64px",
          "borderRadius": "4px",
          "transition": "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          "padding": "6px 8px",
          "color": "#1976D2",
          "backgroundColor": "transparent",
          "&:hover": {
            "textDecoration": "none",
            "backgroundColor": "#f6fafd"
          },
          "&:disabled": {
            "color": "#bdbdbd",
            "pointerEvents": "none",
            "cursor": "default"
          }
        }
      },
      "variants": [
        {
          "props": {
            "disableElevation": "true"
          },
          "style": {
            "boxShadow": "none"
          }
        },
        {
          "props": {
            "fullWidth": "true"
          },
          "style": {
            "width": "100%"
          }
        },
        {
          "props": {
            "variant": "contained"
          },
          "style": {
            "&:disabled": {
              "color": "#bdbdbd",
              "boxShadow": "none",
              "backgroundColor": "#e0e0e0"
            },
            "&:active": {
              "boxShadow": "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"
            },
            "&:hover": {
              "background": "#1565c0",
              "boxShadow": "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
            },
            "padding": "6px 16px",
            "color": "#fff",
            "backgroundColor": "#1976D2",
            "boxShadow": "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
          }
        },
        {
          "props": {
            "variant": "outlined"
          },
          "style": {
            "&:disabled": {
              "color": "#bdbdbd",
              "border": "1px solid #e0e0e0"
            },
            "&:hover": {
              "backgroundColor": "#f6fafd",
              "border": "1px solid #1976D2"
            },
            "padding": "5px 15px",
            "color": "#1976D2",
            "border": "1px solid #8cbae8"
          }
        },
        {
          "props": {
            "size": "small"
          },
          "style": {
            "fontSize": "0.8125rem",
            "padding": "4px 10px"
          }
        },
        {
          "props": {
            "size": "large"
          },
          "style": {
            "fontSize": "0.9375rem",
            "padding": "8px 22px"
          }
        }
      ]
    }
  }
};