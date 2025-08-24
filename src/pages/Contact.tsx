import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

// If you don't have a *.jpg module declaration, keep this ts-ignore.
// Better: add in src/declarations.d.ts: `declare module '*.jpg';`
// @ts-ignore
import contactHero from '../assets/contact-hero.jpg';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Contact Info
const COMPANY_NAME = 'ANTSAR Foreign Trade';
const EMAIL = 'antsartrade@gmail.com';
const PHONE_E164 = '+905056780600';
const PHONE_DISPLAY = '+905056780600';
const WA_NUMBER = '905056780600';
const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;

function Contact(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Prefill message for WhatsApp
  const waPrefill = useMemo(() => {
    const lines = [
      `Hello ${COMPANY_NAME},`,
      formData.name && `Name: ${formData.name}`,
      formData.subject && `Subject: ${formData.subject}`,
      formData.message && `Message: ${formData.message}`,
      formData.email && `Reply to: ${formData.email}`,
    ]
      .filter(Boolean)
      .join('\n');

    return `${WA_BASE_URL}?text=${encodeURIComponent(
      lines || 'Hello, I need information about your services.'
    )}`;
  }, [formData]);

  // Auto-hide success after a few seconds
  useEffect(() => {
    if (!submitSuccess) return;
    const timer = setTimeout(() => setSubmitSuccess(false), 4000);
    return () => clearTimeout(timer);
  }, [submitSuccess]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  const handleWhatsAppClick = () => {
    window.open(waPrefill, '_blank', 'noopener,noreferrer');
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill all required fields.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setSubmitError('Message should be at least 10 characters.');
      return false;
    }
    return true;
  };

  // No EmailJS: we just validate and show success (or suggest WhatsApp)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate a successful send (no external service)
      setSubmitSuccess(true);
      formRef.current?.reset();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitError('Failed to send message. Please try WhatsApp for immediate assistance.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero} aria-label="Contact hero">
        <img
          src={contactHero}
          alt="Contact our international trade experts"
          className={styles.heroImage}
          loading="eager"
          decoding="async"
        />
        <div className={styles.heroOverlay} aria-hidden />

        <div className={styles.heroContent}>
          <h1>Connect With Us</h1>
          <p>Our team is ready to assist with your international trade inquiries.</p>

          <div className={styles.quickLinks} role="group" aria-label="Quick contact links">
            <a className={styles.quickLink && styles.quickLink} href={`mailto:${EMAIL}`} aria-label="Email us">
              <FaEnvelope /> {EMAIL}
            </a>
            <a className={styles.quickLink} href={`tel:${PHONE_E164}`} aria-label="Call us">
              <FaPhone /> {PHONE_DISPLAY}
            </a>
            <a className={styles.quickLink} href={waPrefill} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className={styles.container}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <p className={styles.formSubtitle}>
              We respond within 1 business day. For urgent matters, use WhatsApp.
            </p>

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
                  autoComplete="name"
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
                  autoComplete="email"
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
                  onKeyDown={handleKeyDown}
                  rows={6}
                  required
                  placeholder="Your trade inquiry details"
                />
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className={styles.whatsappCTA}
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp /> WhatsApp Us
                </button>
              </div>

              {submitError && (
                <div className={styles.errorMessage} role="alert" aria-live="polite">
                  {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className={styles.successMessage} role="status" aria-live="polite">
                  <div className={styles.successIcon}>✓</div>
                  <div>
                    <h4>Message Sent!</h4>
                    <p>We'll respond within 24 hours.</p>
                    <a className={styles.successWhatsApp} href={waPrefill} target="_blank" rel="noreferrer">
                      <FaWhatsapp /> Continue on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <a
        href={`${WA_BASE_URL}?text=Hello%20${encodeURIComponent(COMPANY_NAME)}`}
        className={styles.whatsappFloat}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
        <span className={styles.tooltip}>Chat with us</span>
      </a>
    </div>
  );
}

export default Contact;
