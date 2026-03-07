import GreatVibesRegular from '@/shared/assets/fonts/Great_Vibes/GreatVibes-Regular.ttf';
import IstokWebBold from '@/shared/assets/fonts/Istok_Web/IstokWeb-Bold.ttf';
import IstokWebBoldItalic from '@/shared/assets/fonts/Istok_Web/IstokWeb-BoldItalic.ttf';
import IstokWebItalic from '@/shared/assets/fonts/Istok_Web/IstokWeb-Italic.ttf';
import IstokWebRegular from '@/shared/assets/fonts/Istok_Web/IstokWeb-Regular.ttf';
import YsabeauBold from '@/shared/assets/fonts/Ysabeau/static/Ysabeau-Bold.ttf';
import YsabeauBoldItalic from '@/shared/assets/fonts/Ysabeau/static/Ysabeau-BoldItalic.ttf';
import YsabeauItalic from '@/shared/assets/fonts/Ysabeau/static/Ysabeau-Italic.ttf';
import YsabeauMedium from '@/shared/assets/fonts/Ysabeau/static/Ysabeau-Medium.ttf';
import YsabeauMediumItalic from '@/shared/assets/fonts/Ysabeau/static/Ysabeau-MediumItalic.ttf';
import YsabeauRegular from '@/shared/assets/fonts/Ysabeau/static/Ysabeau-Regular.ttf';
import YsabeauSc from '@/shared/assets/fonts/Ysabeau_SC/YsabeauSC-VariableFont_wght.ttf';

const makeSrc = (file: string) => `url(${file}) format('truetype')`;

export const fontFaces = [
  {
    fontFamily: 'Istok Web',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: makeSrc(IstokWebRegular),
  },
  {
    fontFamily: 'Istok Web',
    fontStyle: 'normal',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: makeSrc(IstokWebBold),
  },
  {
    fontFamily: 'Istok Web',
    fontStyle: 'italic',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: makeSrc(IstokWebItalic),
  },
  {
    fontFamily: 'Istok Web',
    fontStyle: 'italic',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: makeSrc(IstokWebBoldItalic),
  },
  {
    fontFamily: 'Great Vibes',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: makeSrc(GreatVibesRegular),
  },
  {
    fontFamily: 'YsabeauCustom',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: makeSrc(YsabeauRegular),
  },
  {
    fontFamily: 'YsabeauCustom',
    fontStyle: 'normal',
    fontWeight: 500,
    fontDisplay: 'swap',
    src: makeSrc(YsabeauMedium),
  },
  {
    fontFamily: 'YsabeauCustom',
    fontStyle: 'normal',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: makeSrc(YsabeauBold),
  },
  {
    fontFamily: 'YsabeauCustom',
    fontStyle: 'italic',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: makeSrc(YsabeauItalic),
  },
  {
    fontFamily: 'YsabeauCustom',
    fontStyle: 'italic',
    fontWeight: 500,
    fontDisplay: 'swap',
    src: makeSrc(YsabeauMediumItalic),
  },
  {
    fontFamily: 'YsabeauCustom',
    fontStyle: 'italic',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: makeSrc(YsabeauBoldItalic),
  },
  {
    fontFamily: 'YsabeauSc',
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'swap',
    src: makeSrc(YsabeauSc),
  },
];
