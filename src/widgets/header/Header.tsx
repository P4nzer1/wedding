import { useState, MouseEvent } from 'react';

import Lottie from 'lottie-react';

import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';

import { LogoIcon } from '@shared/ui';

import { NavigationMenuDesktop, NavigationMenuMobile } from '@/features';
import WinePour from '@/shared/assets/animations/WineBottleAnimation.json';

export const Header = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerBaseHeight = isDesktop ? 80 : 60;

  const open = isMenuOpen;

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }

    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = () => setIsMenuOpen(false);
  return (
    <Stack
      sx={{
        background: theme.palette.colorBg.colorWine,
        height: `calc(${headerBaseHeight}px + var(--safe-top, 0px))`,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        px: 2,
        pt: 'var(--safe-top, 0px)',
        pb: 0,
        boxSizing: 'border-box',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: theme.zIndex.appBar,
      }}
    >
      {isDesktop ? (
        <>
          <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <LogoIcon color={theme.palette.colorBase.colorRose} />
          </Box>
          <IconButton onClick={handleOpen} sx={{ ml: 'auto' }}>
            <Lottie loop animationData={WinePour} style={{ width: 40, height: 40 }} />
          </IconButton>
          <NavigationMenuDesktop anchorEl={anchorEl} open={open} onClose={handleClose} />
        </>
      ) : (
        <>
          <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <LogoIcon color={theme.palette.colorBase.colorRose} />
          </Box>
          <IconButton onClick={handleOpen} sx={{ ml: 'auto' }}>
            <Lottie loop animationData={WinePour} style={{ width: 40, height: 40 }} />
          </IconButton>
          <NavigationMenuMobile anchorEl={anchorEl} open={open} onClose={handleClose} />
        </>
      )}
    </Stack>
  );
};
