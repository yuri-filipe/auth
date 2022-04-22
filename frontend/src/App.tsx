import React from "react";
import Login from "./pages/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./styles/themes/theme";
import { useSelector } from "react-redux";
function App() {
  const _storeTheme = useSelector((state: any) => state.Interface.theme);
  const theme = createTheme(getDesignTokens(_storeTheme));

  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
