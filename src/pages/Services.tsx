import React from 'react';
import {
  FaExchangeAlt,
  FaSearchLocation,
  FaShippingFast,
  FaFileContract,
  FaChartBar,
  FaSeedling,
  FaHardHat,
  FaTshirt,
  FaWineBottle
} from 'react-icons/fa';
import styles from './Services.module.css';
import servicesHero from '../assets/services-hero.jpg';

const Services = () => {
  const services = [
    {
      icon: <FaExchangeAlt className={styles.serviceIcon} />,
      title: "Import/Export Management",
      description: "End-to-end oversight of cross-border transactions with comprehensive documentation handling and compliance assurance."
    },
    {
      icon: <FaSearchLocation className={styles.serviceIcon} />,
      title: "Strategic Sourcing",
      description: "Identification and vetting of premium global suppliers with negotiated contractual terms for optimal value."
    },
    {
      icon: <FaShippingFast className={styles.serviceIcon} />,
      title: "Logistics Coordination",
      description: "Seamless multimodal transportation solutions with real-time shipment tracking and customs management."
    },
    {
      icon: <FaFileContract className={styles.serviceIcon} />,
      title: "Customs Compliance",
      description: "Expert navigation of tariff classifications, trade regulations, and duty optimization strategies."
    },
    {
      icon: <FaChartBar className={styles.serviceIcon} />,
      title: "Market Intelligence",
      description: "Data-driven insights on emerging markets, competitive landscapes, and optimal entry strategies."
    }
  ];

  const industries = [
    {
      title: "Agriculture",
      items: ["Coffee & Tea", "Spices & Herbs", "Oilseeds", "Grains & Pulses", "Horticulture"],
      icon: <FaSeedling className={styles.industryIcon} />
    },
    {
      title: "Construction",
      items: ["Structural Steel", "Cement & Aggregates", "Ceramic Tiles", "Plumbing Fixtures", "Electrical Components"],
      icon: <FaHardHat className={styles.industryIcon} />
    },
    {
      title: "Textiles",
      items: ["Apparel & Garments", "Home Textiles", "Technical Fabrics", "Accessories", "Footwear"],
      icon: <FaTshirt className={styles.industryIcon} />
    },
    {
      title: "Food & Beverage",
      items: ["Processed Foods", "Beverages", "Spices & Condiments", "Confectionery", "Dairy Products"],
      icon: <FaWineBottle className={styles.industryIcon} />
    }
  ];

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <img src={servicesHero} alt="Global Trade Services" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <h1>Our Trade Solutions</h1>
          <p>Comprehensive services designed for seamless international commerce</p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core Services</h2>
            <p className={styles.sectionSubtitle}>Tailored solutions for your global trade requirements</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.iconContainer}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.serviceHoverEffect}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industry Expertise</h2>
            <p className={styles.sectionSubtitle}>Sectors where we deliver exceptional results</p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <div className={styles.industryIconContainer}>
                  {industry.icon}
                </div>
                <h3>{industry.title}</h3>
                <ul className={styles.industryList}>
                  {industry.items.map((item, i) => (
                    <li key={i}>
                      <span className={styles.bullet}></span>
                      {item}
                    </li>
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
