import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/ss.jpg';
import styles from './Navbar.module.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/services', name: 'Services' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' }
    ];
    return (_jsx("nav", { className: styles.navbar, children: _jsxs("div", { className: styles.container, children: [_jsx(Link, { to: "/", className: styles.logoLink, children: _jsx("img", { src: logo, alt: "ANTSAR Logo", className: styles.logo }) }), _jsx("div", { className: styles.desktopMenu, children: navItems.map(({ path, name }) => (_jsx(Link, { to: path, className: `${styles.navLink} ${location.pathname === path ? styles.active : ''}`, children: name }, path))) }), _jsx("button", { className: styles.mobileMenuButton, onClick: () => setIsOpen((prev) => !prev), "aria-label": "Toggle navigation", children: isOpen ? _jsx(FaTimes, {}) : _jsx(FaBars, {}) }), _jsx("div", { className: `${styles.mobileMenu} ${isOpen ? styles.open : ''}`, children: navItems.map(({ path, name }) => (_jsx(Link, { to: path, className: `${styles.mobileNavLink} ${location.pathname === path ? styles.active : ''}`, onClick: () => setIsOpen(false), children: name }, path))) })] }) }));
};
export default Navbar;
