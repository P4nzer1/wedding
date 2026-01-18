import { Button } from '@mui/material';

import { useTheme, ThemeModeEnum } from '@/features';

export const ThemeToggleButton = () => {
  const { mode, toggleMode } = useTheme();

  const getButtonText = () => {
    switch (mode) {
      case ThemeModeEnum.Auto:
        return 'Тема: Авто';
      case ThemeModeEnum.Light:
        return 'Светлая тема';
      case ThemeModeEnum.Dark:
        return 'Темная тема';
      default:
        return 'Переключить тему';
    }
  };

  return (
    <Button variant="wine" onClick={toggleMode}>
      {getButtonText()}
    </Button>
  );
};
