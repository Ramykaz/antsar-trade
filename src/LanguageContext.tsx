import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang, type T } from './translations';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('antsar-lang') as Lang) || 'en';
  });

  const toggleLang = () =>
    setLang(l => {
      const next = l === 'en' ? 'tr' : 'en';
      localStorage.setItem('antsar-lang', next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
};
