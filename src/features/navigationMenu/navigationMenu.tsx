import { useEffect, useMemo, useRef } from 'react';

import {
  Button,
  ClickAwayListener,
  Paper,
  Popper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import { NAVIGATION_SECTION_DESKTOP, NAVIGATION_SECTION_MOBILE } from './consts';
import {
  INavigationMenuMobileProps,
  INavigationMenuDesktopProps,
  NavigationSectionId,
} from './types';

const scrollToSection =
  (id: NavigationSectionId, onAfterNavigate?: () => void, extraOffset = 0) =>
  () => {
    const target = document.getElementById(id);
    if (target) {
      const targetTop = window.scrollY + target.getBoundingClientRect().top;
      const scrollMarginTop =
        Number.parseFloat(getComputedStyle(target).scrollMarginTop || '0') || 0;
      const top = targetTop - scrollMarginTop + extraOffset;

      window.scrollTo({ top, behavior: 'smooth' });
    }
    onAfterNavigate?.();
  };

type FrozenVirtualAnchor = {
  getBoundingClientRect: () => DOMRect;
  contextElement?: HTMLElement;
};

const useFrozenAnchor = (anchorEl: HTMLElement | null, open: boolean) => {
  const frozenRectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (open && anchorEl) {
      frozenRectRef.current = anchorEl.getBoundingClientRect();
      return;
    }

    if (!open) {
      frozenRectRef.current = null;
    }
  }, [anchorEl, open]);

  return useMemo<HTMLElement | FrozenVirtualAnchor | null>(() => {
    if (!open || !frozenRectRef.current) {
      return anchorEl;
    }

    const frozenRect = frozenRectRef.current;

    return {
      getBoundingClientRect: () => frozenRect,
      contextElement: anchorEl ?? undefined,
    };
  }, [anchorEl, open]);
};

export const NavigationMenuMobile = ({ anchorEl, open, onClose }: INavigationMenuMobileProps) => {
  const theme = useTheme();
  const frozenAnchor = useFrozenAnchor(anchorEl, open);
  const handleClickAway = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node | null;
    if (target && anchorEl?.contains(target)) {
      return;
    }
    onClose();
  };

  return (
    <Popper
      anchorEl={frozenAnchor}
      open={open}
      placement="bottom-start"
      popperOptions={{ strategy: 'fixed' }}
      modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
      sx={{ zIndex: theme.zIndex.modal + 1 }}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <Paper
          sx={{
            bgcolor: theme.palette.colorBg.colorWine,
            color: theme.palette.colorBase.colorRose,
            borderRadius: 4,
            p: 1,
            mt: 1.5,
            minWidth: 150,
          }}
        >
          <Stack>
            {NAVIGATION_SECTION_MOBILE.map(({ id, label }) => (
              <Button
                key={id}
                onClick={scrollToSection(id, onClose, 16)}
                sx={{
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  color: theme.palette.colorText.colorIvory,
                  borderRadius: 8,
                  px: 2,
                  py: 0.75,
                  '&:hover': { bgcolor: theme.palette.colorBase.colorChocolate },
                }}
              >
                <Typography variant="h3ysabeauSc" color={theme.palette.colorText.colorIvory}>
                  {label}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export const NavigationMenuDesktop = ({ anchorEl, open, onClose }: INavigationMenuDesktopProps) => {
  const theme = useTheme();
  const frozenAnchor = useFrozenAnchor(anchorEl, open);
  const handleClickAway = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node | null;
    if (target && anchorEl?.contains(target)) {
      return;
    }
    onClose();
  };

  return (
    <Popper
      anchorEl={frozenAnchor}
      open={open}
      placement="bottom-start"
      popperOptions={{ strategy: 'fixed' }}
      modifiers={[{ name: 'offset', options: { offset: [0, 16] } }]}
      sx={{ zIndex: theme.zIndex.modal + 1 }}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <Paper
          sx={{
            bgcolor: theme.palette.colorBg.colorWine,
            color: theme.palette.colorBase.colorRose,
            borderRadius: 8,
            p: 2,
            mt: 1.5,
          }}
        >
          <Stack direction="column" alignItems="flex-start" spacing={1}>
            {NAVIGATION_SECTION_DESKTOP.map(({ id, label }) => (
              <Button
                key={id}
                onClick={scrollToSection(id, onClose, 32)}
                sx={{
                  color: theme.palette.colorText.colorIvory,
                  textTransform: 'none',
                  px: 2,
                  py: 0.5,
                  borderRadius: 8,

                  '&:hover': { bgcolor: theme.palette.colorBase.colorChocolate },
                }}
              >
                <Typography variant="body1" color={theme.palette.colorText.colorIvory}>
                  {label}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};
