import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

// @ts-ignore
import contactHero from '../assets/contact-hero.jpg';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// Contact Info
const COMPANY_NAME = 'ANTSAR Foreign Trade';
const EMAIL = 'antsartrade@gmail.com';
const PHONE_E164 = '+905056780600';
const PHONE_DISPLAY = '+905056780600';
const WA_NUMBER = '905056780600';
const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const waPrefill = useMemo(() => {
    const lines = [
      `Hello ${COMPANY_NAME},`,
      formData.name && `Name: ${formData.name}`,
      formData.subject && `Subject: ${formData.subject}`,
      formData.message && `Message: ${formData.message}`,
      formData.email && `Reply to: ${formData.email}`,
    ].filter(Boolean).join('\n');

    return `${WA_BASE_URL}?text=${encodeURIComponent(lines || 'Hello, I need information about your services.')}`;
  }, [formData]);

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => setSubmitSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    submitError && setSubmitError(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      formRef.current?.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
    }
  };

  const handleWhatsAppClick = () => {
    window.open(waPrefill, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (!formRef.current) throw new Error('Form reference not found');

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitSuccess(true);
      formRef.current.reset();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
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
          alt=""
          className={styles.heroImage}
          loading="eager"
          decoding="async"
        />
        <div className={styles.heroOverlay} aria-hidden />

        <div className={styles.heroContent}>
          <h1>Connect With Us</h1>
          <p>
            Our team is ready to assist with your international trade inquiries.
          </p>

          <div className={styles.quickLinks} role="group" aria-label="Quick contact links">
            <a className={styles.quickLink} href={`mailto:${EMAIL}`} aria-label="Email us">
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
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
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
                <div className={styles.errorMessage} role="alert">
                  {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className={styles.successMessage} role="status">
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
};

export default Contact;
