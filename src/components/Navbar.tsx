import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  const navItems = [
    { path: '/', name: t.nav.home },
    { path: '/services', name: t.nav.services },
    { path: '/about', name: t.nav.about },
    { path: '/contact', name: t.nav.contact },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="ANTSAR Logo" className={styles.logo} />
          <span className={styles.brandText}>ANTSAR</span>
        </Link>

        <div className={styles.desktopMenu}>
          {navItems.map(({ path, name }) => (
            <Link
              key={path}
              to={path}
              className={`${styles.navLink} ${location.pathname === path ? styles.active : ''}`}
            >
              {name}
            </Link>
          ))}
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'en' ? 'Turkish' : 'English'}`}
          >
            {lang === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className={styles.mobileActions}>
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'en' ? 'Turkish' : 'English'}`}
          >
            {lang === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          {navItems.map(({ path, name }) => (
            <Link
              key={path}
              to={path}
              className={`${styles.mobileNavLink} ${location.pathname === path ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
