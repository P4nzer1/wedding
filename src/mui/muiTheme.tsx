import { ReactNode } from 'react';

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import { lightTheme, darkTheme, components, typography } from '@shared/ui';

import { useThemeContext } from '@/features';

export const withMui = (component: () => ReactNode) => {
  return function WithMuiComponent() {
    const { effectiveMode } = useThemeContext();

    const theme = createTheme({
      palette: {
        mode: effectiveMode,
        ...(effectiveMode === 'light' ? lightTheme : darkTheme),
      },
      components,
      typography,
    });

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {component()}
      </ThemeProvider>
    );
  };
};
