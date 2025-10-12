import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';
// If you don't have a *.jpg module declaration, keep this ts-ignore.
// Better: add in src/declarations.d.ts: `declare module '*.jpg';`
// @ts-ignore
import contactHero from '../assets/contact-hero.webp';
// Contact Info
const COMPANY_NAME = 'ANTSAR Foreign Trade';
const EMAIL = 'antsartrade@gmail.com';
const PHONE_E164 = '+905056780600';
const PHONE_DISPLAY = '+905056780600';
const WA_NUMBER = '905056780600';
const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;
function Contact() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formData, setFormData] = useState({
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
        return `${WA_BASE_URL}?text=${encodeURIComponent(lines || 'Hello, I need information about your services.')}`;
    }, [formData]);
    // Auto-hide success after a few seconds
    useEffect(() => {
        if (!submitSuccess)
            return;
        const timer = setTimeout(() => setSubmitSuccess(false), 4000);
        return () => clearTimeout(timer);
    }, [submitSuccess]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (submitError)
            setSubmitError(null);
    };
    const handleKeyDown = (e) => {
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);
        if (!validateForm())
            return;
        setIsSubmitting(true);
        try {
            // Simulate a successful send (no external service)
            setSubmitSuccess(true);
            formRef.current?.reset();
            setFormData({ name: '', email: '', subject: '', message: '' });
        }
        catch (err) {
            setSubmitError('Failed to send message. Please try WhatsApp for immediate assistance.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("div", { className: styles.contactPage, children: [_jsxs("section", { className: styles.hero, "aria-label": "Contact hero", children: [_jsx("img", { src: contactHero, alt: "Contact our international trade experts", className: styles.heroImage, loading: "lazy", decoding: "async" }), _jsx("div", { className: styles.heroOverlay, "aria-hidden": true }), _jsxs("div", { className: styles.heroContent, children: [_jsx("h1", { children: "Connect With Us" }), _jsx("p", { children: "Our team is ready to assist with your international trade inquiries." }), _jsxs("div", { className: styles.quickLinks, role: "group", "aria-label": "Quick contact links", children: [_jsxs("a", { className: styles.quickLink, href: `mailto:${EMAIL}`, "aria-label": "Email us", children: [_jsx(FaEnvelope, {}), " ", EMAIL] }), _jsxs("a", { className: styles.quickLink, href: `tel:${PHONE_E164}`, "aria-label": "Call us", children: [_jsx(FaPhone, {}), " ", PHONE_DISPLAY] }), _jsxs("a", { className: styles.quickLink, href: waPrefill, target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", children: [_jsx(FaWhatsapp, {}), " WhatsApp Us"] })] })] })] }), _jsx("section", { className: styles.contactContent, children: _jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.formSection, children: [_jsx("h2", { className: styles.sectionTitle, children: "Send Us a Message" }), _jsx("p", { className: styles.formSubtitle, children: "We respond within 1 business day. For urgent matters, use WhatsApp." }), _jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: styles.contactForm, children: [_jsxs("div", { className: styles.formGroup, children: [_jsx("label", { htmlFor: "name", children: "Your Name*" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, placeholder: "John Doe", autoComplete: "name" })] }), _jsxs("div", { className: styles.formGroup, children: [_jsx("label", { htmlFor: "email", children: "Email*" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, placeholder: "john@company.com", autoComplete: "email" })] }), _jsxs("div", { className: styles.formGroup, children: [_jsx("label", { htmlFor: "subject", children: "Subject" }), _jsx("input", { type: "text", id: "subject", name: "subject", value: formData.subject, onChange: handleChange, placeholder: "Regarding import/export" })] }), _jsxs("div", { className: styles.formGroup, children: [_jsx("label", { htmlFor: "message", children: "Message*" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, onKeyDown: handleKeyDown, rows: 6, required: true, placeholder: "Your trade inquiry details" })] }), _jsxs("div", { className: styles.formActions, children: [_jsx("button", { type: "submit", className: styles.submitButton, disabled: isSubmitting, children: isSubmitting ? 'Sending...' : (_jsxs(_Fragment, { children: [_jsx(FaPaperPlane, {}), " Send Message"] })) }), _jsxs("button", { type: "button", className: styles.whatsappCTA, onClick: handleWhatsAppClick, children: [_jsx(FaWhatsapp, {}), " WhatsApp Us"] })] }), submitError && (_jsx("div", { className: styles.errorMessage, role: "alert", "aria-live": "polite", children: submitError })), submitSuccess && (_jsxs("div", { className: styles.successMessage, role: "status", "aria-live": "polite", children: [_jsx("div", { className: styles.successIcon, children: "\u2713" }), _jsxs("div", { children: [_jsx("h4", { children: "Message Sent!" }), _jsx("p", { children: "We'll respond within 24 hours." }), _jsxs("a", { className: styles.successWhatsApp, href: waPrefill, target: "_blank", rel: "noreferrer", children: [_jsx(FaWhatsapp, {}), " Continue on WhatsApp"] })] })] }))] })] }) }) }), _jsxs("a", { href: `${WA_BASE_URL}?text=Hello%20${encodeURIComponent(COMPANY_NAME)}`, className: styles.whatsappFloat, target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", children: [_jsx(FaWhatsapp, {}), _jsx("span", { className: styles.tooltip, children: "Chat with us" })] })] }));
}
export default Contact;
