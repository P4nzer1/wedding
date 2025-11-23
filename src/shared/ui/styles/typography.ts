import type { ThemeOptions } from '@mui/material/styles';

const baseFontFamily = '"TT Norms Pro", "Inter", "Roboto", "Helvetica", "Arial", sans-serif';
const headingFontFamily = "Roboto Flex";

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
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: '1rem',
        textTransform: 'none',
    },
};