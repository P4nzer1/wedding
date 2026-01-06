import { ReactNode } from 'react';

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import { lightTheme, darkTheme, components, typography } from '@shared/ui';

import { useTheme } from '@/features';

export const withMui = (component: () => ReactNode) => {
  return function WithMuiComponent() {
    const { effectiveMode } = useTheme();

    const theme = createTheme({
      palette: {
        mode: effectiveMode,
        ...(effectiveMode === 'light' ? lightTheme : darkTheme),
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
