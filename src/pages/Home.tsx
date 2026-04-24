import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import {
  FiGlobe,
  FiTrendingUp,
  FiShield,
  FiCompass,
  FiBox,
  FiShoppingBag,
  FiCoffee,
  FiHome
} from 'react-icons/fi';
import heroImage from '../assets/hero-image.webp';
import { useLanguage } from '../LanguageContext';

const serviceIcons = [<FiGlobe />, <FiTrendingUp />, <FiShield />, <FiCompass />];
const industryIcons = [<FiCoffee />, <FiHome />, <FiShoppingBag />, <FiBox />];

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="Home hero"
          className={styles.heroImage}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{t.home.eyebrow}</p>
          <h1 className={styles.logo}>{t.home.heroTitle}</h1>
          <p className={styles.tagline}>{t.home.heroTagline}</p>
          <div className={styles.ctaGroup}>
            <Link to="/services" className={styles.primaryCta}>{t.home.ctaPrimary}</Link>
            <Link to="/contact" className={styles.secondaryCta}>{t.home.ctaSecondary}</Link>
          </div>
          <div className={styles.statsRow}>
            <article>
              <h3>{t.home.stat1Val}</h3>
              <p>{t.home.stat1Label}</p>
            </article>
            <article>
              <h3>{t.home.stat2Val}</h3>
              <p>{t.home.stat2Label}</p>
            </article>
            <article>
              <h3>{t.home.stat3Val}</h3>
              <p>{t.home.stat3Label}</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>{t.home.servicesSectionTitle}</h2>
          <p>{t.home.servicesSectionSubtitle}</p>
        </div>
        <div className={styles.grid}>
          {t.home.services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{serviceIcons[index]}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.sectionHeader}>
          <h2>{t.home.industriesSectionTitle}</h2>
          <p>{t.home.industriesSectionSubtitle}</p>
        </div>
        <div className={styles.grid}>
          {t.home.industries.map((industry, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{industryIcons[index]}</div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className={styles.bottomInner}>
          <h2>{t.home.bottomTitle}</h2>
          <p>{t.home.bottomText}</p>
          <Link to="/contact" className={styles.primaryCta}>{t.home.bottomBtn}</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
