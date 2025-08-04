import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <h3>ANTSAR FOREIGN TRADE</h3>
            <p>
              Bridging global markets with reliable trade solutions and
              efficient logistics coordination.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact Info</h4>
            <ul>
              <li>Email: antsartrade@gmail.com</li>
              <li>Phone: +90 542 261 87 56</li>
              <li>WhatsApp: +251 910 043 563</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} ANTSAR Foreign Trade. All rights reserved.</p>
          <div className={styles.social}>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
