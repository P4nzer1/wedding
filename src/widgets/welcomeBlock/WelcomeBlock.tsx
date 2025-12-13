import { Box, Typography, useTheme } from '@mui/material';

export const WelcomeBlock = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.colorBase.bgBase, width: '100%', height: '100%' }}>
      <Typography variant="h1" color="cream">
        МЫ ЖЕНИМСЯ
      </Typography>
    </Box>
  );
};
