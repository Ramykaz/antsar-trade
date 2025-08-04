import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1></h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <h2>Who We Are</h2>
          <p>
            We are a foreign trade agency committed to building strong international partnerships
            by bridging supply and demand across global markets.
          </p>

          <div className={styles.missionVision}>
            <div className={styles.card}>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with reliable, efficient, and ethical trade solutions that
                support long-term growth and global connection.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Our Vision</h3>
              <p>
                To become a trusted link between Africa, Europe, and Asia—helping businesses
                expand across borders through smart, seamless trade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
