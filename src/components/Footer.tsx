import { FaLinkedin, FaTwitter, FaInstagram, FaShip, FaGlobe, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>

            {/* Company Info */}
            <div className={styles.footerColumn}>
              <div className={styles.logoContainer}>
                <FaShip className={styles.logoIcon} />
                <span className={styles.logoText}>ANTSAR</span>
              </div>
              <p className={styles.companyDescription}>
                Specializing in international trade solutions between Turkey and Africa.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.footerLinks}>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Our Services</h3>
              <ul className={styles.footerLinks}>
                <li><a href="/services">Import/Export</a></li>
                <li><a href="/services">Commodity Trading</a></li>
                <li><a href="/services">Logistics</a></li>
                <li><a href="/services">Market Research</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Get In Touch</h3>
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
          <p>&copy; {new Date().getFullYear()} ANTSAR Foreign Trade. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <a href="/privacy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
