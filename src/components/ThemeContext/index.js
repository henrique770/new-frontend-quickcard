import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '~/lib';
import useDarkMode from '~/hooks/useDarkmode';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const toggle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={toggle}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;

MyThemeProvider.propTypes = {
  /**
   * children element
   */
  children: PropTypes.node.isRequired,
};
