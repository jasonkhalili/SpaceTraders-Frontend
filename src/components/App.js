import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme } from '@material-ui/core';

import Landing from './Landing';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const App = () => {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Landing />
      </ThemeProvider>
    </>
  )
}

export default App;
