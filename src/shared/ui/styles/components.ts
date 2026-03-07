import { Components, Theme } from '@mui/material';

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...theme.typography.button,
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2, 3),
        border: 'none',
        transition: 'all 0.6s ease',
        cursor: 'pointer',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        '&:hover': { opacity: 0.9 },
        '&:active': { opacity: 0.6 },
        '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
      }),
    },
    defaultProps: { disableElevation: true, disableRipple: true },
    variants: [
      {
        props: { variant: 'wine' },
        style: ({ theme }) => ({
          padding: theme.spacing(1, 3),
          backgroundColor: theme.palette.colorButtonWine.base,
          color: theme.palette.colorText.colorIvory,
          '&:hover': { backgroundColor: theme.palette.colorButtonWine.hover },
          '&:disabled': { backgroundColor: theme.palette.colorButtonWine.disabled },
        }),
      },
      {
        props: { variant: 'rose' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.colorBg.colorRose,
          color: theme.palette.colorText.colorWine,
          padding: theme.spacing(1, 3),
          boxShadow: theme.shadows[2],
          '&:hover': { backgroundColor: theme.palette.colorBg.colorRose },
        }),
      },
    ],
  },
  MuiTypography: {
    defaultProps: {},
    variants: [
      {
        props: { variant: 'body1' },
        style: ({ theme }) => ({
          ...theme.typography.body1,
          color: theme.palette.colorBase.colorWine,
        }),
      },
      {
        props: { color: 'colorBeige' },
        style: ({ theme }) => ({ color: theme.palette.colorBase.colorBeige }),
      },
      {
        props: { color: 'colorWine' },
        style: ({ theme }) => ({ color: theme.palette.colorBase.colorWine }),
      },
      {
        props: { color: 'colorChocolate' },
        style: ({ theme }) => ({ color: theme.palette.colorBase.colorChocolate }),
      },
    ],
  },
};
