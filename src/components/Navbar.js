import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';
import { useLanguage } from '../LanguageContext';
const Navbar = ({ theme, onToggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const location = useLocation();
    const { lang, toggleLang, t } = useLanguage();
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 60);
            if (currentY > lastScrollY.current && currentY > 120) {
                setHidden(true);
                setIsOpen(false);
            }
            else {
                setHidden(false);
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        setHidden(false);
        setIsOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const navItems = [
        { path: '/', name: t.nav.home },
        { path: '/services', name: t.nav.services },
        { path: '/about', name: t.nav.about },
        { path: '/contact', name: t.nav.contact },
    ];
    const navClass = [
        styles.navbar,
        hidden ? styles.navHidden : '',
        scrolled ? styles.scrolled : '',
    ].filter(Boolean).join(' ');
    return (_jsx("nav", { className: navClass, children: _jsxs("div", { className: styles.container, children: [_jsx(Link, { to: "/", className: styles.logoLink, children: _jsx("img", { src: logo, alt: "ANTSAR Logo", className: styles.logo }) }), _jsxs("div", { className: styles.desktopMenu, children: [navItems.map(({ path, name }) => (_jsx(Link, { to: path, className: `${styles.navLink} ${location.pathname === path ? styles.active : ''}`, children: name }, path))), _jsx("button", { className: styles.langToggle, onClick: toggleLang, "aria-label": `Switch language`, children: lang === 'en' ? 'TR' : lang === 'tr' ? 'አማ' : 'EN' }), _jsx("button", { className: styles.themeToggle, onClick: onToggleTheme, "aria-label": `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`, children: theme === 'dark' ? _jsx(FaSun, {}) : _jsx(FaMoon, {}) })] }), _jsxs("div", { className: styles.mobileActions, children: [_jsx("button", { className: styles.langToggle, onClick: toggleLang, "aria-label": `Switch language`, children: lang === 'en' ? 'TR' : lang === 'tr' ? 'አማ' : 'EN' }), _jsx("button", { className: styles.themeToggle, onClick: onToggleTheme, "aria-label": `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`, children: theme === 'dark' ? _jsx(FaSun, {}) : _jsx(FaMoon, {}) }), _jsx("button", { className: styles.mobileMenuButton, onClick: () => setIsOpen(prev => !prev), "aria-label": "Toggle navigation", children: isOpen ? _jsx(FaTimes, {}) : _jsx(FaBars, {}) })] }), _jsx("div", { className: `${styles.mobileMenu} ${isOpen ? styles.open : ''}`, children: navItems.map(({ path, name }) => (_jsx(Link, { to: path, className: `${styles.mobileNavLink} ${location.pathname === path ? styles.active : ''}`, onClick: () => setIsOpen(false), children: name }, path))) })] }) }));
};
export default Navbar;
