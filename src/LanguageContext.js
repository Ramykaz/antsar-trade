import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
import { translations } from './translations';
const LanguageContext = createContext(null);
export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('antsar-lang') || 'en';
    });
    const toggleLang = () => setLang(l => {
        const next = l === 'en' ? 'tr' : l === 'tr' ? 'am' : 'en';
        localStorage.setItem('antsar-lang', next);
        return next;
    });
    return (_jsx(LanguageContext.Provider, { value: { lang, toggleLang, t: translations[lang] }, children: children }));
};
export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx)
        throw new Error('useLanguage must be used inside LanguageProvider');
    return ctx;
};
