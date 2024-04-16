import React, { useState } from 'react'
import SideBar from '../Components/SideBar';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from '../Components/Themes/themes'

export default function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <SideBar themeToggler={themeToggler} theme={theme} />
      </ThemeProvider>
    </>
  )
}

