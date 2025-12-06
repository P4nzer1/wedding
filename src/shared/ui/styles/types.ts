import { CSSProperties } from 'react';


export interface CustomColorBasePalette {
  colorBeige: string;
  colorChocolate: string;
  burgundy: string;
  cream: string;
  marsala: string;
  bgBase: string;
  bgSecond: string;
}

export interface CustomColorButtonWinePalette {
  base: string;
  hover: string;
  disabled: string;
}

export interface CustomColorTextPalette {
  wineBase: string;
  ivoryBase: string;
  ivorySecond: string;
}

export interface CustomPalette {
  colorBase: CustomColorBasePalette;
  colorButtonWine: CustomColorButtonWinePalette;
  colorText: CustomColorTextPalette;
}

export interface CustomPaletteOptions {
  colorBase?: Partial<CustomColorBasePalette> | CustomColorBasePalette;
  colorButtonWine?: Partial<CustomColorButtonWinePalette> | CustomColorButtonWinePalette;
  colorText?: Partial<CustomColorTextPalette> | CustomColorTextPalette;
}

export interface CustomTypographyVariants {
  button: CSSProperties;
  p1: CSSProperties;
  p2: CSSProperties;
}

export interface CustomTypographyVariantsOptions {
  button?: CSSProperties;
  p1?: CSSProperties;
  p2?: CSSProperties;
}

export type ButtonVariant = 'wine';
