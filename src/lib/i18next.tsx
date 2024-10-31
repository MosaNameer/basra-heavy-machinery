// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// const getDefaultLanguage = () => {
//   const storedLanguage = localStorage.getItem('language');
//   if (storedLanguage) {
//     document.body.dir = storedLanguage === 'ar' ? 'rtl' : 'ltr';
//     document.documentElement.lang = storedLanguage;
//     return storedLanguage;
//   } else {
//     document.documentElement.lang = 'en';
//     document.body.dir = 'ltr';
//     localStorage.setItem('language', 'en');
//     return 'en';
//   }
// };  src//ar.json en.json

// i18n
//   .use(initReactI18next)
//   .init({
//     // Default language
//     lng: getDefaultLanguage(),
//     // Fallback language
//     fallbackLng: 'en',
//     // Translation files in the frontend
//     resources: {
//       en: {
//         translation: require('../locales/en.json')
//       },
//       ar: {
//         translation: require('../locales/ar.json')
//       }
//     },
//     react: {
//       useSuspense: false,
//     }
//   });

// export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json'
import ar from '../locales/ar.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ar: {
        translation: ar
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;