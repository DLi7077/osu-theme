import { Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function ModeSwitch({ backgroundColor, onChange, isDarkMode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
        light: "#ffffff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LightModeIcon style={{ color: "white" }} />
        <Switch onChange={onChange} checked={isDarkMode} />
        <DarkModeIcon style={{ color: "white" }} />
      </div>
    </ThemeProvider>
  );
}
