// Services.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaExchangeAlt,
  FaSearchLocation,
  FaShippingFast,
  FaFileContract,
  FaChartBar,
  FaSeedling,
  FaHardHat,
  FaTshirt,
  FaWineBottle,
} from "react-icons/fa";
import styles from "./Services.module.css";
import servicesHero from "../assets/services-hero.jpg";

const Services = () => {
  // Core services as you provided
  const services = [
    {
      icon: <FaExchangeAlt className={styles.serviceIcon} />,
      title: "Import/Export Management",
      description:
        "End-to-end oversight of cross-border transactions with comprehensive documentation handling and compliance assurance.",
    },
    {
      icon: <FaSearchLocation className={styles.serviceIcon} />,
      title: "Strategic Sourcing",
      description:
        "Identification and vetting of premium global suppliers with negotiated contractual terms for optimal value.",
    },
    {
      icon: <FaShippingFast className={styles.serviceIcon} />,
      title: "Logistics Coordination",
      description:
        "Seamless multimodal transportation solutions with real-time shipment tracking and customs management.",
    },
    {
      icon: <FaFileContract className={styles.serviceIcon} />,
      title: "Customs Compliance",
      description:
        "Expert navigation of tariff classifications, trade regulations, and duty optimization strategies.",
    },
    {
      icon: <FaChartBar className={styles.serviceIcon} />,
      title: "Market Intelligence",
      description:
        "Data-driven insights on emerging markets, competitive landscapes, and optimal entry strategies.",
    },
  ];

  // Industry images and titles for sliding carousel
  const industries = [
    {
      title: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Coffee, Tea, Spices & More",
      icon: <FaSeedling className={styles.industryIcon} />,
    },
    {
      title: "Construction",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      description: "Steel, Cement, Electrical Components",
      icon: <FaHardHat className={styles.industryIcon} />,
    },
    {
      title: "Textiles",
      image:
        "https://images.unsplash.com/photo-1521335629791-ce4aec67dd38?auto=format&fit=crop&w=800&q=80",
      description: "Apparel, Home Textiles & Footwear",
      icon: <FaTshirt className={styles.industryIcon} />,
    },
    {
      title: "Food & Beverage",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      description: "Processed Foods, Beverages & Dairy",
      icon: <FaWineBottle className={styles.industryIcon} />,
    },
  ];

  // Settings for Core Services slider (unchanged)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    arrows: true,
    autoplay: false,
  };

  // New slider settings for industries - show 2 or 1 slide with autoplay & fade
  const industriesSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
  };

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

          <Slider {...sliderSettings} className={styles.servicesSlider}>
            {services.map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <div className={styles.iconContainer}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Industry Expertise Section with sliding images */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industry Expertise</h2>
            <p className={styles.sectionSubtitle}>Sectors where we deliver exceptional results</p>
          </div>

          <Slider {...industriesSliderSettings} className={styles.industriesSlider}>
            {industries.map((industry, idx) => (
              <div key={idx} className={styles.industrySlide}>
                <div className={styles.industryImageWrapper}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className={styles.industryImage}
                  />
                  <div className={styles.industryOverlay}></div>
                  <div className={styles.industryText}>
                    <div className={styles.industryIconContainer}>{industry.icon}</div>
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Services;
