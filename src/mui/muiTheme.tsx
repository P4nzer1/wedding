import { ReactNode, useState } from 'react';
import { PaletteMode, ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { lightTheme, darkTheme, components, typography } from '@shared/ui/styles';
import { ThemeModeEnum, getPreferredTheme } from '@features/settings/store';

export const withMui = (component: () => ReactNode) => {
    return function WithMuiComponent() {
        const [mode, setMode] = useState<ThemeModeEnum>(ThemeModeEnum.Auto);

        const themePalette = (mode === ThemeModeEnum.Auto ? getPreferredTheme() : mode) as PaletteMode;

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