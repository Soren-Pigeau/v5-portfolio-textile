import { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr'); // 'fr' par défaut

  const value = {
    lang,
    setLang,
    toggle: () => setLang((l) => (l === 'fr' ? 'en' : 'fr')),
    t: translations[lang], // raccourci : t.home.bio, t.about.tabs.cv, etc.
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook à utiliser dans n'importe quel composant : const { t, lang, toggle } = useLanguage();
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage doit être utilisé dans <LanguageProvider>');
  return ctx;
}
