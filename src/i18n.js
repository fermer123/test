import i18n from 'i18next';
import BackEnd from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(BackEnd)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    whiteList: ['ru', 'en'],
    debug: false,
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
