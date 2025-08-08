import React from 'react';
import styles from './About.module.css';
import { FaGlobeAmericas, FaHandshake, FaChessKnight, FaAnchor } from 'react-icons/fa';
import aboutHero from '../assets/about-hero.jpg';

const About = () => {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <img src={aboutHero} alt="Global Trade Network" className={styles.heroImage} />
        <div className={styles.heroContent}>
          <h1>About ANTSAR</h1>
          <p>Building bridges in global trade since 2024</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <p className={styles.sectionSubtitle}>
              A premier foreign trade agency connecting markets across continents
            </p>
          </div>

          <div className={styles.contentText}>
            <p>
              ANTSAR Foreign Trade Agency specializes in creating strategic international partnerships
              by efficiently bridging supply and demand across global markets. With our extensive network
              and market expertise, we simplify cross-border trade for businesses of all scales.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className={styles.missionVision}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FaHandshake />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver reliable, efficient, and ethical trade solutions that empower businesses
                to achieve sustainable growth and forge valuable global connections.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FaChessKnight />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted trade link between Africa, Europe, and Asia by developing
                intelligent, seamless trade corridors that benefit all stakeholders.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className={styles.valuesSection}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <FaAnchor />
                </div>
                <h3>Integrity</h3>
                <p>We maintain absolute transparency and honesty in all transactions</p>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <FaGlobeAmericas />
                </div>
                <h3>Efficiency</h3>
                <p>Streamlined processes that deliver results faster than industry standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
