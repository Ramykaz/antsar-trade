import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => alert('Message sent successfully!'))
      .catch(() => alert('Failed to send message.'));
    }
  };

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Get In Touch</h1>
          <p>We're ready to help you with your trade needs</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2>Send Us a Message</h2>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="user_name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="user_email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company (Optional)</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoContainer}>
              <h2>Direct Contact</h2>
              <div className={styles.contactMethods}>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.icon} />
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:antsartrade@gmail.com">antsartrade@gmail.com</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.icon} />
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+905422618756">+90 542 261 87 56</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FaWhatsapp className={styles.icon} />
                  <div>
                    <h3>WhatsApp</h3>
                    <a
                      href="https://wa.me/251910043563?text=Hello%20ANTSAR%20Team,%20I%20need%20information%20about..."
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
