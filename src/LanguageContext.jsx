import { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('RU'); // состояние выбранного языка

  const handleLanguageChange = () => {
    // функция для изменения языка
    setLanguage(language === 'RU' ? 'ENG' : 'RU');
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
