import { CSSProperties } from 'react';

export interface CustomColorBasePalette {
  colorBeige: string;
  colorChocolate: string;
  colorWine: string;
  colorRose: string;
  colorWhite: string;
  colorBlack: string;
}

export interface CustomColorBgPalette {
  colorWine: string;
  colorBeige: string;
  colorGradient: string;
  colorRose: string;
}

export interface CustomColorButtonWinePalette {
  base: string;
  hover: string;
  disabled: string;
}

export interface CustomColorTextPalette {
  colorWine: string;
  colorIvory: string;
  colorChocolate: string;
  colorRose: string;
}

export interface CustomPalette {
  colorBase: CustomColorBasePalette;
  colorButtonWine: CustomColorButtonWinePalette;
  colorText: CustomColorTextPalette;
  colorBg: CustomColorBgPalette;
}

export interface CustomPaletteOptions {
  colorBase?: Partial<CustomColorBasePalette> | CustomColorBasePalette;
  colorButtonWine?: Partial<CustomColorButtonWinePalette> | CustomColorButtonWinePalette;
  colorText?: Partial<CustomColorTextPalette> | CustomColorTextPalette;
  colorBg?: Partial<CustomColorBgPalette> | CustomColorBgPalette;
}

export interface CustomTypographyVariants {
  button: CSSProperties;
  p1: CSSProperties;
  p2: CSSProperties;
  p3: CSSProperties;
  h1ysabeauSc: CSSProperties;
  h2ysabeauSc: CSSProperties;
  h3ysabeauSc: CSSProperties;
  h4ysabeauSc: CSSProperties;
  h1greatVibes: CSSProperties;
  h2greatVibes: CSSProperties;
  h3greatVibes: CSSProperties;
  h4greatVibes: CSSProperties;
}

export interface CustomTypographyVariantsOptions {
  button?: CSSProperties;
  p1?: CSSProperties;
  p2?: CSSProperties;
  p3?: CSSProperties;
  h1ysabeauSc?: CSSProperties;
  h2ysabeauSc?: CSSProperties;
  h3ysabeauSc?: CSSProperties;
  h4ysabeauSc?: CSSProperties;
  h1greatVibes?: CSSProperties;
  h2greatVibes?: CSSProperties;
  h3greatVibes?: CSSProperties;
  h4greatVibes?: CSSProperties;
}

export type ButtonVariant = 'wine' | 'rose';

export interface CustomTypographyPropsVariantOverrides {
  button: true;
  p1: true;
  p2: true;
  p3: true;
  h1ysabeauSc: true;
  h2ysabeauSc: true;
  h3ysabeauSc: true;
  h4ysabeauSc: true;
  h1greatVibes: true;
  h2greatVibes: true;
  h3greatVibes: true;
  h4greatVibes: true;
}
