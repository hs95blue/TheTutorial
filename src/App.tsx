import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import RoutesComponent from './routes';
import useThemeStore from './store/client/themeStore';

const App = () => {
const { theme } = useThemeStore();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <RoutesComponent />
    </ThemeProvider>
  );
};

export default App;