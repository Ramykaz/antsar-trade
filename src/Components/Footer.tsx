import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaShip, FaGlobe } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWave}></div>

      <div className={styles.footerContent}>
        <div className={styles.container}>
          {/* Footer Columns */}
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.footerColumn}>
              <div className={styles.logoContainer}>
                <FaShip className={styles.logoIcon} />
                <span className={styles.logoText}>ANTSAR</span>
              </div>
              <p className={styles.companyDescription}>
                Bridging continents through intelligent trade solutions and seamless logistics.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Navigation</h3>
              <ul className={styles.footerLinks}>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Services</h3>
              <ul className={styles.footerLinks}>
                <li><a href="/services">Import/Export</a></li>
                <li><a href="/services">Product Sourcing</a></li>
                <li><a href="/services">Logistics</a></li>
                <li><a href="/services">Customs Advisory</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <ul className={styles.contactInfo}>
                <li>
                  <FaGlobe className={styles.contactIcon} />
                  <span>Istanbul, Turkey / Addis Ababa, Ethiopia</span>
                </li>
                <li>
                  <a href="mailto:antsartrade@gmail.com">
                    antsartrade@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+905422618756">
                    +90 542 261 87 56
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} ANTSAR Foreign Trade Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
