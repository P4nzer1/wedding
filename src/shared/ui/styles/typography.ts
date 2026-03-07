import type { ThemeOptions } from '@mui/material/styles';

import { breakpoints } from '@/shared/consts';
import { up } from '@/shared/utils';

const secondaryFontFamily = '"Great Vibes"';
const ysabeauSc = '"YsabeauSc", "YsabeauCustom"';

export const typography: NonNullable<ThemeOptions['typography']> = {
  fontFamily: ysabeauSc,
  h1ysabeauSc: {
    fontSize: '1.5rem',
    lineHeight: 1,
    fontWeight: 500,
    fontFamily: ysabeauSc,
    [up(breakpoints.xl)]: {
      fontSize: '3rem',
    },
  },
  h1greatVibes: {
    fontSize: '3rem',
    lineHeight: 1,
    fontWeight: 500,
    fontFamily: secondaryFontFamily,
    [up(breakpoints.xl)]: {
      fontSize: '8rem',
    },
  },
  h2ysabeauSc: {
    fontSize: '1.25rem',
    lineHeight: 1,
    fontWeight: 500,
    fontFamily: ysabeauSc,
    [up(breakpoints.xl)]: {
      fontSize: '5rem',
    },
  },
  h2greatVibes: {
    fontSize: '3.5rem',
    lineHeight: 1,
    fontWeight: 500,
    fontFamily: secondaryFontFamily,
    [up(breakpoints.xl)]: {
      fontSize: '5rem',
    },
  },
  h3ysabeauSc: {
    fontSize: '1rem',
    lineHeight: 1,
    fontWeight: 500,
    fontFamily: ysabeauSc,
    [up(breakpoints.xl)]: {
      fontSize: '2rem',
    },
  },
  h3greatVibes: {
    fontSize: '1.75rem',
    lineHeight: 1,
    fontWeight: 500,
    fontFamily: secondaryFontFamily,
    [up(breakpoints.xl)]: {
      fontSize: '3rem',
    },
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: 1.25,
    fontWeight: 400,
    [up(breakpoints.xl)]: {
      fontSize: '1.25rem',
    },
  },
  button: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
    fontWeight: 500,
    textTransform: 'none',
    [up(breakpoints.xl)]: {
      fontSize: '1rem',
    },
  },
};
