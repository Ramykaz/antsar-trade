import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FiGlobe, FiTrendingUp, FiShield, FiCompass, FiBox, FiShoppingBag, FiCoffee, FiHome } from 'react-icons/fi';
import heroImage from '../assets/hero-image.jpg';

const industries = [
  {
    title: "Agriculture",
    icon: <FiCoffee />,
    description: "Premium sourcing of coffee, spices, and agricultural commodities"
  },
  {
    title: "Construction",
    icon: <FiHome />,
    description: "Building materials and industrial supplies"
  },
  {
    title: "Textiles",
    icon: <FiShoppingBag />,
    description: "Quality garment manufacturing connections"
  },
  {
    title: "Commodities",
    icon: <FiBox />,
    description: "Bulk trading with transparent pricing"
  }
];

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <img src={heroImage} alt="Global Trade" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            {/* Your black & white logo would go here */}
            <span className={styles.logoText}>ANTSAR</span>
          </div>
          <h1>Precision in Global Commerce</h1>
          <p>Strategic trade solutions between emerging markets</p>
          <div className={styles.ctaGroup}>
            <Link to="/services" className={styles.primaryCta}>Our Services</Link>
            <Link to="/contact" className={styles.secondaryCta}>Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Tailored Trade Solutions</h2>
            <p className={styles.sectionSubtitle}>Comprehensive services for seamless cross-border commerce</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <FiGlobe className={styles.serviceIcon} />
              <h3>Market Entry</h3>
              <p>Strategic guidance for expanding into new territories</p>
            </div>
            <div className={styles.serviceCard}>
              <FiTrendingUp className={styles.serviceIcon} />
              <h3>Commodity Trading</h3>
              <p>Reliable sourcing and distribution networks</p>
            </div>
            <div className={styles.serviceCard}>
              <FiShield className={styles.serviceIcon} />
              <h3>Risk Management</h3>
              <p>Protecting your interests in volatile markets</p>
            </div>
            <div className={styles.serviceCard}>
              <FiCompass className={styles.serviceIcon} />
              <h3>Logistics Strategy</h3>
              <p>Optimized supply chain solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.industries}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Industry Specializations</h2>
            <p className={styles.sectionSubtitle}>Sectors where we deliver exceptional results</p>
          </div>
          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <div className={styles.industryIcon}>{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
