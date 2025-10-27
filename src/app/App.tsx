import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { muiTheme } from '../styles/muiTheme';
import MainPage from '@pages/main-page/MainPage';

export default function App() {
    return (
        <div>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <MainPage />
            </ThemeProvider>
        </div>
    )
}
