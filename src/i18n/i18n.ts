import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ru from '@shared/assets/locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    cleanCode: true,
    lowerCaseLng: true,
    resources: {
      ru: {
        translation: ru,
      },
    },
    supportedLngs: ['ru'],
    fallbackLng: 'ru',
    detection: {
      order: ['path', 'localStorage', 'cookie', 'navigator', 'subdomain', 'querystring', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    },
  });

export { i18n };
