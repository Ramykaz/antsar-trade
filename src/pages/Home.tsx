import React from 'react';
import styles from './Home.module.css';

const industries = [
  {
    title: "Agriculture",
    description: "Sourcing of coffee, spices, cereals, oilseeds, and more.",
  },
  {
    title: "Construction Materials",
    description: "Export/import of iron rods, tiles, and industrial materials.",
  },
  {
    title: "Textiles & Apparel",
    description: "Connecting buyers with garment manufacturers.",
  },
  {
    title: "Food & Beverage",
    description: "Premium Ethiopian coffee, spices, and processed goods.",
  },
];

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <h1>ANTSAR FOREIGN TRADE AGENCY</h1>
          <p>Bridging global markets with reliable trade solutions</p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.whatWeDo}>
        <div className={styles.container}>
          <h2>What We Do</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>🌍 Import & Export Brokerage</h3>
              <p>Connecting buyers and sellers across borders.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>🔍 Product Sourcing</h3>
              <p>Finding the best suppliers for your needs.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>🚚 Logistics & Customs Support</h3>
              <p>Smooth shipping and compliance handling.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>📊 Market Consulting</h3>
              <p>Expert insights for global expansion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <h2>Why Choose Us</h2>
          <ul className={styles.benefitsList}>
            <li>✅ Trusted global network</li>
            <li>✅ Efficient logistics coordination</li>
            <li>✅ Transparent and reliable</li>
            <li>✅ Multilingual communication</li>
          </ul>
        </div>
      </section>

      {/* Featured Industries */}
      <section className={styles.industries}>
        <div className={styles.container}>
          <h2>Featured Industries</h2>
          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2024 ANTSAR Foreign Trade Agency. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
