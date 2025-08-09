import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FiGlobe, FiTrendingUp, FiShield, FiCompass, FiBox, FiShoppingBag, FiCoffee, FiHome } from 'react-icons/fi';
import heroImage from '../assets/hero-image.jpg';

const industries = [
  { title: "Agriculture", icon: <FiCoffee />, description: "Premium sourcing of coffee, spices, and agricultural commodities" },
  { title: "Construction", icon: <FiHome />, description: "Building materials and industrial supplies" },
  { title: "Textiles", icon: <FiShoppingBag />, description: "Quality garment manufacturing connections" },
  { title: "Commodities", icon: <FiBox />, description: "Bulk trading with transparent pricing" }
];

const services = [
  { title: "Market Entry", icon: <FiGlobe />, description: "Strategic guidance for expanding into new territories" },
  { title: "Commodity Trading", icon: <FiTrendingUp />, description: "Reliable sourcing and distribution networks" },
  { title: "Risk Management", icon: <FiShield />, description: "Protecting your interests in volatile markets" },
  { title: "Logistics Strategy", icon: <FiCompass />, description: "Optimized supply chain solutions" }
];

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src={heroImage} alt="Global Trade" className={styles.heroImage} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.logo}>Antsar <span>Foreign Trade Agency</span></h1>
          <p className={styles.tagline}>Where Precision Meets Global Opportunity</p>
          <div className={styles.ctaGroup}>
            <Link to="/services" className={styles.primaryCta}>Explore Services</Link>
            <Link to="/contact" className={styles.secondaryCta}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Tailored Trade Solutions</h2>
          <p>Comprehensive services for seamless cross-border commerce</p>
        </div>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.sectionHeader}>
          <h2>Industry Expertise</h2>
          <p>Sectors where we deliver exceptional results</p>
        </div>
        <div className={styles.grid}>
          {industries.map((industry, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>{industry.icon}</div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
