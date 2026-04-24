import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';
// @ts-ignore
import contactHero from '../assets/contact-hero.webp';
import { useLanguage } from '../LanguageContext';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const COMPANY_NAME = 'ANTSAR Foreign Trade';
const EMAIL = 'antsartrade@gmail.com';
const PHONE_E164 = '+905056780600';
const PHONE_DISPLAY = '+905056780600';
const WA_NUMBER = '905056780600';
const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;

function Contact() {
  const { t } = useLanguage();
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
      setSubmitError(t.contact.errorRequired);
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitError(t.contact.errorEmail);
      return false;
    }
    if (formData.message.trim().length < 10) {
      setSubmitError(t.contact.errorShortMessage);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || t.contact.errorGeneric);
      }

      setSubmitSuccess(true);
      formRef.current?.reset();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : t.contact.errorGeneric;
      setSubmitError(message);
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
          loading="lazy"
          decoding="async"
        />
        <div className={styles.heroOverlay} aria-hidden />

        <div className={styles.heroContent}>
          <h1>{t.contact.heroTitle}</h1>
          <p>{t.contact.heroSubtitle}</p>

          <div className={styles.quickLinks} role="group" aria-label="Quick contact links">
            <a className={styles.quickLink} href={`mailto:${EMAIL}`} aria-label="Email us">
              <FaEnvelope /> {EMAIL}
            </a>
            <a className={styles.quickLink} href={`tel:${PHONE_E164}`} aria-label="Call us">
              <FaPhone /> {PHONE_DISPLAY}
            </a>
            <a className={styles.quickLink} href={waPrefill} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp /> {t.contact.quickWhatsApp}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className={styles.container}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>{t.contact.formTitle}</h2>
            <p className={styles.formSubtitle}>{t.contact.formSubtitle}</p>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t.contact.labelName}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.placeholderName}
                  autoComplete="name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">{t.contact.labelEmail}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.placeholderEmail}
                  autoComplete="email"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">{t.contact.labelSubject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.placeholderSubject}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">{t.contact.labelMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  rows={6}
                  required
                  placeholder={t.contact.placeholderMessage}
                />
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  {isSubmitting ? t.contact.btnSending : (
                    <><FaPaperPlane /> {t.contact.btnSubmit}</>
                  )}
                </button>
                <button
                  type="button"
                  className={styles.whatsappCTA}
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp /> {t.contact.btnWhatsApp}
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
                    <h4>{t.contact.successTitle}</h4>
                    <p>{t.contact.successText}</p>
                    <a className={styles.successWhatsApp} href={waPrefill} target="_blank" rel="noreferrer">
                      <FaWhatsapp /> {t.contact.successWhatsApp}
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
