import { Box, Typography, useTheme } from '@mui/material';

export const InviteBlock = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.colorBase.bgBase, width: '100%' }}>
      <Typography variant="h1" color="cream">
        Приглашение
      </Typography>
    </Box>
  );
};
