import React, { createContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Retrieve the selected language from localStorage (or use 'en' as default)
    return localStorage.getItem('selectedLanguage') || 'en';
  });

  // Update localStorage whenever the language changes
  // useEffect(() => {
  //   localStorage.setItem('selectedLanguage', language);
  // }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
