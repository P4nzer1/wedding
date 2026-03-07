import { Box, useTheme } from '@mui/material';

import footerBackground from '@/shared/assets/images/footer/footer.png';

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerBackground})`,
        width: '100%',
        height: 80,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 260%',
        backgroundPositionY: 'bottom',
        bgcolor: theme.palette.colorBg.colorBeige,
      }}
    />
  );
};
