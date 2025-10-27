import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const muiTheme = createTheme({
    palette: {
        primary: {
            main: colors.primary.main,
        },
        secondary: {
            main: colors.secondary.main,
        },
        background: {
            default: colors.background.default,
        },

        text: {
            primary: colors.text.primary,
            secondary: colors.text.secondary,
        },
    },
});

export type AppTheme = typeof muiTheme;