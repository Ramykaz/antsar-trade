import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaShip, FaGlobe, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <div className={styles.logoContainer}>
                <FaShip className={styles.logoIcon} />
                <span className={styles.logoText}>ANTSAR</span>
              </div>
              <p className={styles.companyDescription}>{t.footer.description}</p>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>{t.footer.quickLinksTitle}</h3>
              <ul className={styles.footerLinks}>
                <li><Link to="/">{t.footer.links.home}</Link></li>
                <li><Link to="/services">{t.footer.links.services}</Link></li>
                <li><Link to="/about">{t.footer.links.about}</Link></li>
                <li><Link to="/contact">{t.footer.links.contact}</Link></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>{t.footer.coreFocusTitle}</h3>
              <ul className={styles.footerLinks}>
                <li><Link to="/services">{t.footer.links.importExport}</Link></li>
                <li><Link to="/services">{t.footer.links.commodityTrading}</Link></li>
                <li><Link to="/services">{t.footer.links.logistics}</Link></li>
                <li><Link to="/services">{t.footer.links.marketResearch}</Link></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>{t.footer.contactTitle}</h3>
              <ul className={styles.contactInfo}>
                <li>
                  <FaGlobe className={styles.contactIcon} />
                  <span>Ankara, Turkey & Addis Ababa, Ethiopia</span>
                </li>
                <li>
                  <FaEnvelope className={styles.contactIcon} />
                  <a href="mailto:antsartrade@gmail.com">antsartrade@gmail.com</a>
                </li>
                <li>
                  <FaPhone className={styles.contactIcon} />
                  <a href="tel:+905422618756">+90 542 261 87 56</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className={styles.legalLinks}>
            <Link to="/privacy">{t.footer.privacy}</Link>
            <span>|</span>
            <Link to="/terms">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
