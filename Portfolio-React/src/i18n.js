import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';
import nl from './locales/nl.json';
import fr from './locales/fr.json';
import ta from './locales/ta.json';
import si from './locales/si.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      nl: { translation: nl },
      fr: { translation: fr },
      ta: { translation: ta },
      si: { translation: si }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
