import React from 'react';
import {  ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { Button } from './components/Button/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Button variant="contained">Learn React</Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
