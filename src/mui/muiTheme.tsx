import { ReactNode } from 'react';
import { PaletteMode, ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { lightTheme, darkTheme, components, typography } from '@shared/ui/styles';

const DEFAULT_THEME_MODE: PaletteMode = 'light';

export const withMui = (component: () => ReactNode) => {
    return function WithMuiComponent() {
        const themePalette = DEFAULT_THEME_MODE;

        const theme = createTheme({
            palette: {
                mode: themePalette,
                ...(themePalette === 'light' ? lightTheme : darkTheme),
            },
            components,
            typography,
        });

        return (
            <>
                <CssBaseline />
                <ThemeProvider theme={theme}>{component()}</ThemeProvider>
            </>
        );
    };
};