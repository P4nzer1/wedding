import { PaletteMode } from '@mui/material';

import { ThemeModeEnum } from './themeTypes';


export const getPreferredTheme = (): PaletteMode => {
  const storedTheme = localStorage.getItem('themeMode');

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme as PaletteMode;
  }

  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return ThemeModeEnum.Light;
  }

  return ThemeModeEnum.Dark;
};
