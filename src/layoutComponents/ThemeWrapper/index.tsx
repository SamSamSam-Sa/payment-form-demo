import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colorScheme from './theme/theme';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme(colorScheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
