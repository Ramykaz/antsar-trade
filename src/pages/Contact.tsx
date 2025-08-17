import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from 'react-icons/fa';

import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

// @ts-ignore
import contactHero from '../assets/contact-hero.jpg';

// EmailJS Configuration - Replace these with your actual IDs
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// --- Constants (single source of truth) ---
const COMPANY_NAME = 'ANTSAR Foriegn Trade';

const EMAIL = 'antsartrade@gmail.com';
const PHONE_E164 = '+905056780600';       // tel: format
const PHONE_DISPLAY = '+905056780600';    // shown to users as provided

// WhatsApp :: wa.me without "+" and with optional prefilled text
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

  // Build a friendly WhatsApp message dynamically from form fields
  const waPrefill = useMemo(() => {
    const lines = [
      `Hello ANTSAR Team,`,
      formData.name ? `My name: ${formData.name}` : '',
      formData.subject ? `Subject: ${formData.subject}` : '',
      formData.message ? `Message: ${formData.message}` : '',
      formData.email ? `Reply to: ${formData.email}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(lines || 'Hello ANTSAR Team, I need information about your services.');
    return `${WA_BASE_URL}?text=${encoded}`;
  }, [formData.name, formData.subject, formData.message, formData.email]);

  // Success toast auto-hide
  useEffect(() => {
    if (!submitSuccess) return;
    const t = setTimeout(() => setSubmitSuccess(false), 4000);
    return () => clearTimeout(t);
  }, [submitSuccess]);

  // Field change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (submitError) setSubmitError(null);
  };

  // Optional: Ctrl/Cmd+Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  // Direct WhatsApp open from a dedicated button
  const handleWhatsAppClick = () => {
    window.open(waPrefill, '_blank', 'noopener,noreferrer');
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (!formRef.current) {
        throw new Error('Form reference not found');
      }

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status !== 200) {
        throw new Error('Failed to send message');
      }

      setSubmitSuccess(true);
      formRef.current.reset();
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* =======================
          HERO (image + gold overlay)
      ======================== */}
      <section className={styles.hero} aria-label="Contact hero">
        {/* Optional hero image (from assets). Remove if you prefer pure CSS bg. */}
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
            Our team is ready to assist with your international trade inquiries and partnerships.
            Reach us via email, phone, or WhatsApp — whichever you prefer.
          </p>

          {/* Quick links row */}
          <div className={styles.quickLinks} role="group" aria-label="Quick contact links">
            <a
              className={styles.quickLink}
              href={`mailto:${EMAIL}`}
              aria-label="Email us"
            >
              <FaEnvelope />
              <span>{EMAIL}</span>
            </a>
            <a
              className={styles.quickLink}
              href={`tel:${PHONE_E164}`}
              aria-label="Call us"
            >
              <FaPhone />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              className={styles.quickLink}
              href={waPrefill}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat via WhatsApp"
            >
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* =======================
          CONTACT CONTENT
      ======================== */}
      <section className={styles.contactContent}>
        <div className={styles.container}>
          {/* ---- Form Column ---- */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>
              Send Us a Message
            </h2>
            <p className={styles.formSubtitle}>
              We typically respond within 1 business day.
              For urgent matters, ping us on WhatsApp.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={styles.contactForm}
              aria-describedby="contact-help"
            >
              {/* Name */}
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

              {/* Email */}
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

              {/* Subject */}
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Regarding import/export"
                  autoComplete="off"
                />
              </div>

              {/* Message */}
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
                  placeholder="How can we assist you with your international trade needs?"
                />
              </div>

              {/* Actions */}
              <div className={styles.formActions}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                  aria-live="polite"
                >
                  {isSubmitting ? 'Sending…' : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className={styles.whatsappCTA}
                  onClick={handleWhatsAppClick}
                  aria-label="Open WhatsApp chat"
                >
                  <FaWhatsapp /> WhatsApp Us
                </button>
              </div>

              <p id="contact-help" className={styles.helperText}>
                Tip: Press <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>Enter</kbd> to send quickly.
              </p>

              {/* Error message */}
              {submitError && (
                <div className={styles.errorMessage} role="alert">
                  {submitError}
                </div>
              )}

              {/* Success feedback (auto hides) */}
              {submitSuccess && (
                <div className={styles.successMessage} role="status" aria-live="polite">
                  <div className={styles.successIcon}>✓</div>
                  <div>
                    <h4>Message sent successfully!</h4>
                    <p>
                      We'll respond within 24 hours. For urgent matters,
                      you can also reach us on WhatsApp.
                    </p>
                    <a
                      className={styles.successWhatsApp}
                      href={waPrefill}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp /> Continue on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* =======================
          Floating WhatsApp Button
      ======================== */}
      <a
        href={`${WA_BASE_URL}?text=Hello%20ANTSAR%20Team,%20I%20need%20information%20about%20your%20services`}
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
