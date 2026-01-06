import { PaletteMode } from '@mui/material';

import { ThemeModeEnum } from './themeTypes';

export const getPreferredTheme = (): PaletteMode => {
  const storedTheme = localStorage.getItem('themeMode');

  if (storedTheme === ThemeModeEnum.Dark || storedTheme === ThemeModeEnum.Light) {
    return storedTheme as PaletteMode;
  }

  if (storedTheme === ThemeModeEnum.Auto || !storedTheme) {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: light').matches
        ? ThemeModeEnum.Light
        : ThemeModeEnum.Dark;
    }
  }

  return ThemeModeEnum.Dark;
};
