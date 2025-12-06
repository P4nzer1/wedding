import { Components, Theme } from '@mui/material';

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...theme.typography.button,
        borderRadius: '8px',
        border: 'none',
        transition: 'all 0.9s ease',
        cursor: 'pointer',
        padding: theme.spacing(1.8, 4),
        '&:hover': {},
        '&:active': {},
        '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
      }),
    },
    defaultProps: { disableElevation: true, disableRipple: true },
    variants: [
      {
        props: { variant: 'wine' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.colorButtonWine.base,
          color: theme.palette.colorText.ivoryBase,
          borderRadius: '50px',
          '&:hover': { backgroundColor: theme.palette.colorButtonWine.hover },
          '&:disabled': { backgroundColor: theme.palette.colorButtonWine.disabled },
        }),
      },
    ],
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        p1: 'p',
        p2: 'p',
      },
    },
    variants: [
      {
        props: { variant: 'p1' },
        style: ({ theme }) => ({
          ...theme.typography.p1,
          color: theme.palette.colorBase.burgundy,
        }),
      },
      {
        props: { variant: 'p2' },
        style: ({ theme }) => ({
          ...theme.typography.p2,
          color: theme.palette.colorBase.burgundy,
        }),
      },
      {
        props: { color: 'colorBeige' },
        style: ({ theme }) => ({ color: theme.palette.colorBase.colorBeige }),
      },
      {
        props: { color: 'burgundy' },
        style: ({ theme }) => ({ color: theme.palette.colorBase.burgundy }),
      },
      {
        props: { color: 'colorChocolate' },
        style: ({ theme }) => ({ color: theme.palette.colorBase.colorChocolate }),
      },
      {
        props: { color: 'cream' },
        style: ({ theme }) => ({ color: theme.palette.colorBase.cream }),
      },
      {
        props: { color: 'marsala' },
        style: ({ theme }) => ({ color: theme.palette.colorBase.marsala }),
      },
    ],
  },
};
