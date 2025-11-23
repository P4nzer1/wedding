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
                    '&:hover': { backgroundColor: theme.palette.colorButtonWine.hover},
                    '&:disabled': { backgroundColor: theme.palette.colorButtonWine.disabled},
                }),
            },
        ],
    },
};