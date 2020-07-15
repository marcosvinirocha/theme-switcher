import React from "react";
import { ThemeProvider , DefaultTheme} from "styled-components"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import Global from "./styles/global";
import Header from "./components/Header";
import usePersitedState from "./utils/usePersitedState";


function App() {

  const [theme, setTheme] = usePersitedState<DefaultTheme>("theme",light);

  const toggleTheme = () => {
    setTheme(theme.title==="light"? dark: light);
  }

  return (
    <ThemeProvider theme={theme}>
       <div>
      <Global/>
      <Header toggleTheme={toggleTheme} />
    </div>
    </ThemeProvider>
   
  );
}

export default App;
