import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.privacy}>
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <div className={styles.content}>

          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly, including business contact details, trade requirements, and communication records.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Provide and improve our trade services</li>
              <li>Communicate about your projects</li>
              <li>Send service updates and industry insights</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your data. We may share information with logistics partners and regulatory bodies only as necessary for trade operations.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information from unauthorized access or disclosure.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Cookies and Tracking</h2>
            <p>
              Our website uses essential cookies for functionality. We do not use tracking cookies for advertising.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Contact Us</h2>
            <p>
              For privacy-related inquiries:<br />
              Email: antsartrade@gmail.com<br />
              Phone: +905056780600
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
