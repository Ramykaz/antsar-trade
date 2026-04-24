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
  FaGem,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import servicesHero from "../assets/services-hero.webp";

import impExpImg from "../assets/import-export.webp";
import strategicSourcingImg from "../assets/strategic-sourcing.webp";
import logisticsImg from "../assets/logistics.webp";
import customsImg from "../assets/customs.webp";
import marketIntelImg from "../assets/market-intelligence.webp";
import { useLanguage } from "../LanguageContext";

const serviceIcons = [
  <FaExchangeAlt />,
  <FaSearchLocation />,
  <FaShippingFast />,
  <FaFileContract />,
  <FaChartBar />,
];

const serviceImages = [
  impExpImg,
  strategicSourcingImg,
  logisticsImg,
  customsImg,
  marketIntelImg,
];

const industryIcons = [
  <FaSeedling />,
  <FaHardHat />,
  <FaTshirt />,
  <FaWineBottle />,
  <FaGem />,
];

const industryImages = [
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  // Cargo ship at a major port — Turkey–Africa maritime trade route context
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
];

const Services = () => {
  const { t } = useLanguage();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: true } },
      { breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
    ],
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <div className={styles.servicesPage}>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img
          src={servicesHero}
          alt="Global Trade Services"
          className={styles.heroImage}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{t.services.eyebrow}</p>
          <h1>{t.services.heroTitle}</h1>
          <p>{t.services.heroSubtitle}</p>
        </div>
      </section>

      {/* ── Core Services ─────────────────────────────── */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t.services.coreEyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.services.coreTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.services.coreSubtitle}</p>
          </div>

          <div className={styles.servicesGrid}>
            {t.services.services.map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <span className={styles.cardAccent} />
                <div
                  className={styles.serviceImage}
                  style={{ backgroundImage: `url(${serviceImages[idx]})` }}
                >
                  <div className={styles.serviceImageOverlay} />
                </div>
                <div className={styles.serviceContent}>
                  <div className={styles.iconContainer}>{serviceIcons[idx]}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className={styles.cardArrow}><FiArrowRight /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Expertise ────────────────────────── */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t.services.industryEyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.services.industryTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.services.industrySubtitle}</p>
          </div>

          <Slider {...sliderSettings} className={styles.industriesSlider}>
            {t.services.industries.map((industry, idx) => (
              <div key={idx} className={styles.industrySlide}>
                <div className={styles.industryCard}>
                  <div
                    className={styles.industryBg}
                    style={{ backgroundImage: `url(${industryImages[idx]})` }}
                  />
                  <div className={styles.industryOverlay} />
                  <span className={styles.industryNumber}>0{idx + 1}</span>
                  <div className={styles.industryContent}>
                    <div className={styles.industryIconWrap}>{industryIcons[idx]}</div>
                    <h3>{industry.title}</h3>
                    <div className={styles.industryDivider} />
                    <div className={styles.industryTags}>
                      {industry.items.map((item, i) => (
                        <span key={i} className={styles.industryTag}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ── Process Section ───────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t.services.processEyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.services.processTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.services.processSubtitle}</p>
          </div>
          <div className={styles.processGrid}>
            {t.services.steps.map((p, i) => (
              <div key={i} className={styles.processStep}>
                <span className={styles.stepNumber}>0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <h2>{t.services.ctaTitle}</h2>
            <p>{t.services.ctaText}</p>
            <Link to="/contact" className={styles.ctaButton}>
              {t.services.ctaBtn} <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
