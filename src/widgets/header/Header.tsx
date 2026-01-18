import { AppBar, Toolbar, Box, useTheme } from '@mui/material';

import { ThemeToggleButton } from '@/features';

export const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ background: theme.palette.colorBase.colorBeige }}>
      <Toolbar>
        <Box>
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
