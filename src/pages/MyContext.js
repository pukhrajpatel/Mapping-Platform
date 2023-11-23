import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const themeClass = 'light-theme';
  // const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={themeClass} style={{display: 'block'}}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, useTheme, ThemeProvider };

