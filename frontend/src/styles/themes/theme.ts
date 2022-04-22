import { PaletteMode, ThemeOptions } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode):ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#344CB7",
          },
          secondary: {
            main: "#344CB7",
      
          },
        
        }
      : {
          primary: {
            main: "#344CB7",
          },
          secondary: {
            main: "#344CB7",
          },
        }),
  },
  typography:{
    allVariants: {
      textTransform: "uppercase"
    }
  }
});
