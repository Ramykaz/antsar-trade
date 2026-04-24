import styles from './About.module.css';
import {
  FaGlobeAmericas,
  FaHandshake,
  FaShieldAlt,
  FaChessKnight,
  FaAnchor,
  FaBolt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import aboutHero from '../assets/about-hero.webp';
import { useLanguage } from '../LanguageContext';

const statIcons = [<FaGlobeAmericas />, <FaHandshake />, <FaShieldAlt />, <FaBolt />];
const regionFlags = ['🇹🇷', '🌍', '🌐'];
const valueIcons = [<FaAnchor />, <FaBolt />, <FaHandshake />];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.about}>

      {/* ── Hero ─────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img src={aboutHero} alt="Global Trade Network" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{t.about.eyebrow}</p>
          <h1>{t.about.heroTitle}</h1>
          <p>{t.about.heroSubtitle}</p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {t.about.stats.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statIcon}>{statIcons[i]}</div>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionLight}>
        <div className={styles.container}>

          {/* ── Who We Are ───────────────────────── */}
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t.about.storyEyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.about.storyTitle}</h2>
          </div>
          <div className={styles.contentText}>
            <p>{t.about.storyP1}</p>
            <p>{t.about.storyP2}</p>
          </div>

          {/* ── Mission & Vision ─────────────────── */}
          <div className={styles.missionVision}>
            <div className={styles.missionCard}>
              <div className={styles.cardIconWrap}><FaHandshake /></div>
              <h3>{t.about.missionTitle}</h3>
              <p>{t.about.missionText}</p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.cardIconWrap}><FaChessKnight /></div>
              <h3>{t.about.visionTitle}</h3>
              <p>{t.about.visionText}</p>
            </div>
          </div>

          {/* ── Core Values ──────────────────────── */}
          <div className={styles.valuesSection}>
            <div className={styles.sectionHeader} style={{ marginTop: '1rem' }}>
              <p className={styles.sectionEyebrow}>{t.about.valuesEyebrow}</p>
              <h2 className={styles.sectionTitle}>{t.about.valuesTitle}</h2>
            </div>
            <div className={styles.valuesGrid}>
              {t.about.values.map((v, i) => (
                <div key={i} className={styles.valueItem}>
                  <div className={styles.valueIconWrap}>{valueIcons[i]}</div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Regions ──────────────────────────── */}
          <div className={styles.regionsSection}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>{t.about.regionsEyebrow}</p>
              <h2 className={styles.sectionTitle}>{t.about.regionsTitle}</h2>
            </div>
            <div className={styles.regionsGrid}>
              {t.about.regions.map((r, i) => (
                <div key={i} className={styles.regionCard}>
                  <span className={styles.regionFlag}>{regionFlags[i]}</span>
                  <div className={styles.regionInfo}>
                    <h3>{r.country}</h3>
                    <p className={styles.regionCity}><FaMapMarkerAlt /> {r.city}</p>
                    <span className={styles.regionRole}>{r.role}</span>
                    <p className={styles.regionDetail}>{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ──────────────────────────────── */}
          <div className={styles.ctaBlock}>
            <h2>{t.about.ctaTitle}</h2>
            <p>{t.about.ctaText}</p>
            <Link to="/contact" className={styles.ctaButton}>
              {t.about.ctaBtn} <FiArrowRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
