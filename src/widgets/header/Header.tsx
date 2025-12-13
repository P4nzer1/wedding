import { Box, Typography, useTheme } from '@mui/material';

export const Header = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.colorBase.bgSecond, width: '100%' }}>
      <Typography variant="h1" color="cream">
        ХЕДЕР
      </Typography>
    </Box>
  );
};
