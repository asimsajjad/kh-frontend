// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.js';
import arTranslation from './locales/ar.js';
import urTranslation from './locales/ur.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      ur: { translation: urTranslation },
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // If translation not found, fallback to English
    interpolation: {
      escapeValue: false, // React already escapes variables
    },
  });

  root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  // document.getElementById('root')
);

reportWebVitals();
