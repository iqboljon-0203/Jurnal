import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUz from './public/uz/common.json';
import translationRu from './public/ru/common.json';
import translationEn from './public/en/common.json';
const language=localStorage.getItem("i18nextLng")||'uz';
const resources = {
    "uz": {
        translation: translationUz,
    },
    "ru": {
        translation: translationRu,
    },
    "en": {
        translation: translationEn,
    },
};

// `i18n` ni sozlash
i18n
  .use(initReactI18next) // React uchun i18n integratsiyasi
  .init({
    resources,
    lng: language, // Standart til
    fallbackLng: 'en', // Fallback til
    interpolation: {
      escapeValue: false, // React bilan xavfsiz
    },
  });

export default i18n;