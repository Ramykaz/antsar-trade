import styles from './Terms.module.css';

const Terms = () => {
  return (
    <div className={styles.terms}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>LEGAL</p>
        <h1>Terms of Service</h1>
        <div className={styles.content}>

          <section className={styles.section}>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using ANTSAR Foreign Trade Agency services, you agree to these Terms of Service and applicable laws.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Services Description</h2>
            <p>
              ANTSAR provides international trade consulting, market entry strategy, supplier sourcing, logistics coordination, and customs compliance services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Client Responsibilities</h2>
            <ul>
              <li>Provide accurate business information and documentation</li>
              <li>Maintain transparent communication regarding trade requirements</li>
              <li>Adhere to international trade laws and regulations</li>
              <li>Make timely payments for services rendered</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Fees and Payment</h2>
            <p>
              Service fees are outlined in individual service agreements. Payments are due as specified in the agreement, with late payments subject to interest charges.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information shared during business engagements.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Limitation of Liability</h2>
            <p>
              ANTSAR is not liable for market fluctuations, regulatory changes, or force majeure events affecting trade operations.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Turkey. Disputes are resolved through arbitration in Istanbul unless otherwise agreed in writing.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Contact Information</h2>
            <p>
              For questions regarding these terms, contact us at:<br />
              Email: antsartrade@gmail.com<br />
              Phone: +905056780600
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;
