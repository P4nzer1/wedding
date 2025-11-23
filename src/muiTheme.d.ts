import { CSSProperties } from 'react';
import '@mui/material';

declare module '@mui/material/styles' { 
    interface ColorBasePalette {
        white: string;
        wine: string;
        strokeBase: string;
        strokeSecond: string;
        bg: string;
    }

    interface ColorButtonWinePalette {
        base: string;
        hover: string;
        disabled: string;
    }

    interface ColorTextPalette {
        wineBase: string;
        ivoryBase: string;
        ivorySecond: string;
    }

    interface Palette {
        colorBase: ColorBasePalette;
        colorButtonWine: ColorButtonWinePalette;
        colorText: ColorTextPalette;
    }

    interface PaletteOptions {
        colorBase?: Partial<ColorBasePalette> | ColorBasePalette;
        colorButtonWine?: Partial<ColorButtonWinePalette> | ColorButtonWinePalette;
        colorText?: Partial<ColorTextPalette> | ColorTextPalette;
    }

    interface TypographyVariants { 
        button: CSSProperties;
    }

    interface TypographyVariantsOptions { 
        button?: CSSProperties;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        wine: true;
    }
}

declare module 'mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        button: true;
    }
}