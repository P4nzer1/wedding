import type { ThemeOptions } from '@mui/material/styles';


const baseFontFamily = '"TT Norms Pro", "Inter", "Roboto", "Helvetica", "Arial", sans-serif';
const headingFontFamily = 'Roboto Flex';

export const typography: NonNullable<ThemeOptions['typography']> = {
  fontFamily: baseFontFamily,
  htmlFontSize: 16,
  h1: {
    fontSize: '2.625rem',
    lineHeight: 1.2,
    fontWeight: 700,
    fontFamily: headingFontFamily,
  },
  h2: {
    fontSize: '2rem',
    lineHeight: 1.2,
    fontWeight: 700,
    fontFamily: headingFontFamily,
  },
  h3: {
    fontSize: '1.875rem',
    lineHeight: 1.25,
    fontWeight: 500,
  },
  h4: {
    fontSize: '1.375rem',
    lineHeight: 1.25,
    fontWeight: 500,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  button: {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 500,
    textTransform: 'none',
  },
  p1: {
    fontFamily: baseFontFamily,
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
  },
  p2: {
    fontFamily: baseFontFamily,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
  },
};
