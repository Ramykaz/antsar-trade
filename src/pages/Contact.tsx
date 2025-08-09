import React, { useRef, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock, FaLinkedin } from 'react-icons/fa';
import { MdBusiness } from 'react-icons/md';
import styles from './Contact.module.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      formRef.current?.reset();
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Connect With Us</h1>
          <p>Our team is ready to assist with your international trade inquiries and partnerships</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactContent}>
        <div className={styles.container}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h2>Send Us a Message</h2>
            <p className={styles.formSubtitle}>We typically respond within 1 business day</p>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Regarding import/export"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="How can we assist you with your international trade needs?"
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
                  <div className={styles.successIcon}>✓</div>
                  <div>
                    <h4>Message sent successfully!</h4>
                    <p>We'll respond within 24 hours. For urgent matters, please call or WhatsApp us.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.infoSection}>
            <h2>Our Contact Details</h2>
            <p className={styles.infoSubtitle}>Multiple ways to reach our international trade specialists</p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <MdBusiness />
                </div>
                <div>
                  <h3>Company Info</h3>
                  <p><strong>ANTSAR International Trade</strong></p>
                  <p>Import/Export Specialists</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:antsartrade@gmail.com">antsartrade@gmail.com</a>
                  <p className={styles.note}>Preferred for detailed inquiries</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone (Turkey)</h3>
                  <a href="tel:+905422618756">+90 542 261 87 56</a>
                  <p className={styles.note}>Mon-Fri, 9AM-6PM (GMT+3)</p>
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
                  <p className={styles.note}>Click for instant messaging</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaClock />
                </div>
                <div>
                  <h3>Business Hours</h3>
                  <p><strong>Turkey:</strong> 9AM-6PM (GMT+3)</p>
                  <p><strong>Ethiopia:</strong> 9AM-6PM (GMT+3)</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Our Locations</h3>
                  <p><strong>Turkey:</strong> Istanbul Office</p>
                  <p><strong>Ethiopia:</strong> Addis Ababa Office</p>
                  <button className={styles.mapButton}>View on Map</button>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h3>Connect With Us</h3>
              <div className={styles.socialLinks}>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                {/* Add more social icons as needed */}
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
        <span className={styles.tooltip}>Chat with us on WhatsApp</span>
      </a>
    </div>
  );
};

export default Contact;
