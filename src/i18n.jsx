import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
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

i18n.use(Backend).use(LanguageDetector).use(initReactI18next)
    if (typeof window !== 'undefined') {
        i18n.init({
            lng: language,
            fallbackLng: 'uz',
            preload:['uz','ru','en'],
            resources,
            interpolation: {
                escapeValue: false,
            },
        });
    }

export default i18n;
