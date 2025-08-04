import React from 'react';
import { FaGlobe, FaSearch, FaShip, FaFileAlt, FaChartLine } from 'react-icons/fa';
import styles from './Services.module.css';

const services = [
  {
    icon: <FaGlobe className={styles.serviceIcon} />,
    title: "Import & Export Management",
    description: "End-to-end handling of international trade operations including documentation, compliance, and logistics coordination from supplier to final destination."
  },
  {
    icon: <FaSearch className={styles.serviceIcon} />,
    title: "Product Sourcing",
    description: "We identify and vet reliable suppliers, negotiate competitive pricing, and manage the entire supply chain for optimal efficiency."
  },
  {
    icon: <FaShip className={styles.serviceIcon} />,
    title: "Shipping & Logistics",
    description: "Comprehensive coordination of transportation modes, customs clearance, and delivery timelines to ensure seamless movement of goods."
  },
  {
    icon: <FaFileAlt className={styles.serviceIcon} />,
    title: "Customs Advisory",
    description: "Expert guidance on trade compliance, tariff classifications, and document processing to navigate complex customs regulations."
  },
  {
    icon: <FaChartLine className={styles.serviceIcon} />,
    title: "Market Research",
    description: "In-depth analysis of target markets, competitor landscapes, and entry strategies to inform your international expansion decisions."
  }
];

const industries = [
  {
    title: "Agriculture",
    items: ["Coffee", "Spices", "Oilseeds", "Cereals", "Pulses"],
    color: "#4CAF50"
  },
  {
    title: "Construction Materials",
    items: ["Steel products", "Cement", "Tiles", "Sanitary ware", "Electrical fittings"],
    color: "#607D8B"
  },
  {
    title: "Textiles & Apparel",
    items: ["Garments", "Fabric", "Home textiles", "Technical textiles", "Accessories"],
    color: "#9C27B0"
  },
  {
    title: "Food & Beverage",
    items: ["Processed foods", "Beverages", "Spices", "Coffee", "Tea"],
    color: "#FF9800"
  }
];

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Our Trade Services</h1>
          <p>Comprehensive solutions tailored to your international business needs</p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Core Services</h2>
          <p className={styles.sectionSubtitle}>We handle the complexities so you can focus on growth</p>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.iconContainer}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={`${styles.section} ${styles.industriesSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <p className={styles.sectionSubtitle}>Specialized expertise across key sectors</p>

          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div
                key={index}
                className={styles.industryCard}
                style={{ borderTop: `4px solid ${industry.color}` }}
              >
                <h3>{industry.title}</h3>
                <ul>
                  {industry.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
