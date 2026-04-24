import { useState, useEffect, useRef } from 'react';
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
      } else {
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

  return (
    <nav className={navClass}>
      <div className={styles.container}>

        {/* Logo — left */}
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="ANTSAR Logo" className={styles.logo} />
        </Link>

        {/* Desktop nav links — right */}
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
            aria-label={`Switch language`}
          >
            {lang === 'en' ? 'TR' : lang === 'tr' ? 'አማ' : 'EN'}
          </button>
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile controls — right */}
        <div className={styles.mobileActions}>
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={`Switch language`}
          >
            {lang === 'en' ? 'TR' : lang === 'tr' ? 'አማ' : 'EN'}
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

        {/* Mobile dropdown */}
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
