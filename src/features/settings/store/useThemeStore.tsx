import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { PaletteMode } from '@mui/material';

import { ThemeModeEnum, getPreferredTheme } from '@/features';

interface ThemeContextType {
  mode: ThemeModeEnum;
  effectiveMode: 'light' | 'dark';
  setMode: (mode: ThemeModeEnum) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<ThemeModeEnum>(() => {
    const stored = localStorage.getItem('themeMode') as ThemeModeEnum;
    return stored || ThemeModeEnum.Auto;
  });

  const [effectiveMode, setEffectiveMode] = useState<PaletteMode>(getPreferredTheme());

  const setMode = (newMode: ThemeModeEnum) => {
    setModeState(newMode);
    localStorage.setItem('themeMode', newMode);

    const effective = newMode === ThemeModeEnum.Auto ? getPreferredTheme() : newMode;
    setEffectiveMode(effective);
  };

  const toggleMode = () => {
    let newMode: ThemeModeEnum;

    if (mode === ThemeModeEnum.Auto) {
      const systemTheme = getPreferredTheme();
      newMode = systemTheme === ThemeModeEnum.Light ? ThemeModeEnum.Dark : ThemeModeEnum.Light;
    } else {
      newMode = mode === ThemeModeEnum.Light ? ThemeModeEnum.Dark : ThemeModeEnum.Light;
    }

    setMode(newMode);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      if (mode === ThemeModeEnum.Auto) {
        setEffectiveMode(getPreferredTheme());
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, effectiveMode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
