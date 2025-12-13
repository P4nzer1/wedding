import '@mui/material';

import {
  CustomPalette,
  CustomPaletteOptions,
  CustomTypographyVariants,
  CustomTypographyVariantsOptions,
  ButtonVariant,
  CustomTypographyPropsVariantOverrides,
} from '@shared/ui/styles/types';

declare module '@mui/material/styles' {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPaletteOptions {}
  interface TypographyVariants extends CustomTypographyVariants {}
  interface TypographyVariantsOptions extends CustomTypographyVariantsOptions {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides extends Record<ButtonVariant, true> {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends CustomTypographyPropsVariantOverrides {}
}
