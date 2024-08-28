import React, {createContext, useState, ReactNode, useContext} from 'react';

export enum Language {
  EN = 'english',
  NP = 'nepali',
}

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

type ContextProviderProps = {
  children: ReactNode;
};

export const LanguageContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const contextValue = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageContextProvider',
    );
  }
  return context;
};
