import ContrastIcon from '@mui/icons-material/Contrast';
import { IconButton, useTheme } from '@mui/material';

import { useThemeContext } from '@/features';

export const ThemeToggleButton = () => {
  const { toggleMode } = useThemeContext();
  const theme = useTheme();

  return (
    <IconButton onClick={toggleMode}>
      <ContrastIcon sx={{ color: theme.palette.colorBase.colorRose }} />
    </IconButton>
  );
};
