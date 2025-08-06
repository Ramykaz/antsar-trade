import React, { useRef, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      formRef.current?.reset();
    }, 1500);
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Get In Touch</h1>
          <p>We're ready to help with your international trade needs</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactContent}>
        <div className={styles.container}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h2>Send Us a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Regarding import/export"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className={styles.successMessage}>
                  Message sent successfully! We'll respond within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.infoSection}>
            <h2>Contact Information</h2>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:antsartrade@gmail.com">antsartrade@gmail.com</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaPhone />
              </div>
              <div>
                <h3>Phone (Turkey)</h3>
                <a href="tel:+905422618756">+90 542 261 87 56</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaWhatsapp />
              </div>
              <div>
                <h3>WhatsApp (Turkey)</h3>
                <a
                  href="https://wa.me/905422618756?text=Hello%20ANTSAR%20Team,%20I%20need%20information%20about%20your%20services"
                  target="_blank"
                  rel="noreferrer"
                >
                  +90 542 261 87 56
                </a>
                <p className={styles.note}>Click to chat directly via WhatsApp</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Locations</h3>
                <p><strong>Turkey:</strong> Istanbul</p>
                <p><strong>Ethiopia:</strong> Addis Ababa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/905422618756?text=Hello%20ANTSAR%20Team,%20I%20need%20information%20about%20your%20services"
        className={styles.whatsappFloat}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp />
        <span className={styles.tooltip}>Chat with us</span>
      </a>
    </div>
  );
};

export default Contact;
