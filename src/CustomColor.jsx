import React from "react";
import { createTheme } from "@mui/material";


export const MyTheme = createTheme({
  palette: {
    primary: {
      main: "#FAFAFA",
    },
    secondary: {
      main: "#eee9b4",
    },
    text: {
      main: "#000000",
      light: "#4c4817",
      dark: "#403b02",
    },
    info: {
      main: "#ede7a4",
      light : "#E6E6FA",
      dark : '#333333',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark : '#1b5e20'
    }
  },
});


/*:root[data-theme="light"] {
  --text: #2a2709;
  --background: #ffffff;
  --primary: #a3ebe4;
  --secondary: #eee9b4;
  --accent: #d7ec83;
}
:root[data-theme="dark"] {
  --text: #f6f3d5;
  --background: #000000;
  --primary: #145c55;
  --secondary: #4b4611;
  --accent: #677c13;
}*/
