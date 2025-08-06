import React from 'react';
import styles from './Home.module.css';
import { FaGlobe, FaChartLine, FaShieldAlt, FaLanguage } from 'react-icons/fa';
import heroImage from '../assets/hero-image.jpg';

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
        <div className={styles.heroOverlay}></div>
        <img src={heroImage} alt="Global Trade" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <h1>Global Trade Solutions</h1>
          <p>Bridging markets with precision and elegance</p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.whatWeDo}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionSubtitle}>Comprehensive solutions for your international trade needs</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceRow}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🌍</div>
                <h3>Import & Export Brokerage</h3>
                <p>Connecting buyers and sellers across borders with our global network.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔍</div>
                <h3>Product Sourcing</h3>
                <p>Finding the best suppliers tailored to your specific requirements.</p>
              </div>
            </div>
            <div className={styles.serviceRow}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🚚</div>
                <h3>Logistics Support</h3>
                <p>End-to-end transportation and customs clearance solutions.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📊</div>
                <h3>Market Consulting</h3>
                <p>Strategic insights to guide your international expansion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Partner With Us</h2>
            <p className={styles.sectionSubtitle}>We deliver exceptional value through our unique advantages</p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitRow}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <FaGlobe />
                </div>
                <h3>Global Network</h3>
                <p>Established connections across 3 continents with trusted partners.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <FaChartLine />
                </div>
                <h3>Operational Excellence</h3>
                <p>30% faster lead times through streamlined processes.</p>
              </div>
            </div>
            <div className={styles.benefitRow}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <FaShieldAlt />
                </div>
                <h3>Complete Transparency</h3>
                <p>Real-time tracking at every stage of your shipment.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <FaLanguage />
                </div>
                <h3>Cultural Bridge</h3>
                <p>Multilingual team understanding local business practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className={styles.industries}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Industries</h2>
            <p className={styles.sectionSubtitle}>Sectors where we have deep expertise</p>
          </div>
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
    </div>
  );
};

export default Home;
