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
import servicesHero from "../assets/services-hero.webp";

// Import your images for Core Services here:
import impExpImg from "../assets/import-export.webp";
import strategicSourcingImg from "../assets/strategic-sourcing.webp";
import logisticsImg from "../assets/logistics.webp";
import customsImg from "../assets/customs.webp";
import marketIntelImg from "../assets/market-intelligence.webp";

const Services = () => {
  const services = [
    {
      icon: <FaExchangeAlt className={styles.serviceIcon} />,
      title: "Import/Export Management",
      description:
        "End-to-end oversight of cross-border transactions with comprehensive documentation handling and compliance assurance.",
      image: impExpImg,
    },
    {
      icon: <FaSearchLocation className={styles.serviceIcon} />,
      title: "Strategic Sourcing",
      description:
        "Identification and vetting of premium global suppliers with negotiated contractual terms for optimal value.",
      image: strategicSourcingImg,
    },
    {
      icon: <FaShippingFast className={styles.serviceIcon} />,
      title: "Logistics Coordination",
      description:
        "Seamless multimodal transportation solutions with real-time shipment tracking and customs management.",
      image: logisticsImg,
    },
    {
      icon: <FaFileContract className={styles.serviceIcon} />,
      title: "Customs Compliance",
      description:
        "Expert navigation of tariff classifications, trade regulations, and duty optimization strategies.",
      image: customsImg,
    },
    {
      icon: <FaChartBar className={styles.serviceIcon} />,
      title: "Market Intelligence",
      description:
        "Data-driven insights on emerging markets, competitive landscapes, and optimal entry strategies.",
      image: marketIntelImg,
    },
  ];

  const industries = [
    {
      title: "Agriculture",
      items: ["Coffee & Tea", "Spices & Herbs", "Oilseeds", "Grains & Pulses", "Horticulture"],
      icon: <FaSeedling className={styles.industryIcon} />,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Construction",
      items: [
        "Structural Steel",
        "Cement & Aggregates",
        "Ceramic Tiles",
        "Plumbing Fixtures",
        "Electrical Components",
      ],
      icon: <FaHardHat className={styles.industryIcon} />,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Textiles",
      items: ["Apparel & Garments", "Home Textiles", "Technical Fabrics", "Accessories", "Footwear"],
      icon: <FaTshirt className={styles.industryIcon} />,
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Food & Beverage",
      items: ["Processed Foods", "Beverages", "Spices & Condiments", "Confectionery", "Dairy Products"],
      icon: <FaWineBottle className={styles.industryIcon} />,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: false
        }
      }
    ],
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true
  };

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <img
          src={servicesHero}
          alt="Global Trade Services"
          className={styles.heroImage}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.heroContent}>
          <h1>Our Trade Solutions</h1>
          <p>Comprehensive services designed for seamless international commerce</p>
        </div>
      </section>

      {/* Core Services Section with Flip Cards */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core Services</h2>
            <p className={styles.sectionSubtitle}>Tailored solutions for your global trade requirements</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div key={idx} className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div
                    className={styles.flipCardFront}
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className={styles.flipCardBack}>
                    <div className={styles.iconContainer}>{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section with Image Slider */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industry Expertise</h2>
            <p className={styles.sectionSubtitle}>Sectors where we deliver exceptional results</p>
          </div>

          <Slider {...sliderSettings} className={styles.industriesSlider}>
            {industries.map((industry, idx) => (
              <div key={idx} className={styles.industrySlide}>
                <div
                  className={styles.industryImage}
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className={styles.industryOverlay}></div>
                  <div className={styles.industryContent}>
                    <div className={styles.industryIconContainer}>{industry.icon}</div>
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
