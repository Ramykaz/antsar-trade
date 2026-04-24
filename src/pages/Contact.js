import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';
// @ts-ignore
import contactHero from '../assets/contact-hero.webp';
import { useLanguage } from '../LanguageContext';
const COMPANY_NAME = 'ANTSAR Foreign Trade';
const EMAIL = 'antsartrade@gmail.com';
const PHONE_E164 = '+905056780600';
const PHONE_DISPLAY = '+905056780600';
const WA_NUMBER = '905056780600';
const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;
function Contact() {
    const { t } = useLanguage();
    const formRef = useRef(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formData, setFormData] = useState({
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
        return `${WA_BASE_URL}?text=${encodeURIComponent(lines || 'Hello, I need information about your services.')}`;
    }, [formData]);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitError(null);
        if (!validateForm())
            return;
        const subject = encodeURIComponent(formData.subject || `New inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setSubmitSuccess(true);
        formRef.current?.reset();
        setFormData({ name: '', email: '', subject: '', message: '' });
    };
    return (_jsxs("div", { className: styles.contactPage, children: [_jsxs("section", { className: styles.hero, "aria-label": "Contact hero", children: [_jsx("img", { src: contactHero, alt: "Contact our international trade experts", className: styles.heroImage, loading: "lazy", decoding: "async" }), _jsx("div", { className: styles.heroOverlay, "aria-hidden": true }), _jsxs("div", { className: styles.heroContent, children: [_jsx("h1", { children: t.contact.heroTitle }), _jsx("p", { children: t.contact.heroSubtitle }), _jsxs("div", { className: styles.quickLinks, role: "group", "aria-label": "Quick contact links", children: [_jsxs("a", { className: styles.quickLink, href: `mailto:${EMAIL}`, "aria-label": "Email us", children: [_jsx(FaEnvelope, {}), " ", EMAIL] }), _jsxs("a", { className: styles.quickLink, href: `tel:${PHONE_E164}`, "aria-label": "Call us", children: [_jsx(FaPhone, {}), " ", PHONE_DISPLAY] }), _jsxs("a", { className: styles.quickLink, href: waPrefill, target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", children: [_jsx(FaWhatsapp, {}), " ", t.contact.quickWhatsApp] })] })] })] }), _jsx("section", { className: styles.contactContent, children: _jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.formSection, children: [_jsx("h2", { className: styles.sectionTitle, children: t.contact.formTitle }), _jsx("p", { className: styles.formSubtitle, children: t.contact.formSubtitle }), _jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: styles.contactForm, children: [_jsxs("div", { className: styles.formGroup, children: [_jsx("label", { htmlFor: "name", children: t.contact.labelName }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, placeholder: t.contact.placeholderName, autoComplete: "name" })] }), _jsxs("div", { className: styles.formGroup, children: [_jsx("label", { htmlFor: "email", children: t.contact.labelEmail }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, placeholder: t.contact.placeholderEmail, autoComplete: "email" })] }), _jsxs("div", { className: styles.formGroup, children: [_jsx("label", { htmlFor: "subject", children: t.contact.labelSubject }), _jsx("input", { type: "text", id: "subject", name: "subject", value: formData.subject, onChange: handleChange, placeholder: t.contact.placeholderSubject })] }), _jsxs("div", { className: styles.formGroup, children: [_jsx("label", { htmlFor: "message", children: t.contact.labelMessage }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, onKeyDown: handleKeyDown, rows: 6, required: true, placeholder: t.contact.placeholderMessage })] }), _jsxs("div", { className: styles.formActions, children: [_jsxs("button", { type: "submit", className: styles.submitButton, children: [_jsx(FaPaperPlane, {}), " ", t.contact.btnSubmit] }), _jsxs("button", { type: "button", className: styles.whatsappCTA, onClick: handleWhatsAppClick, children: [_jsx(FaWhatsapp, {}), " ", t.contact.btnWhatsApp] })] }), submitError && (_jsx("div", { className: styles.errorMessage, role: "alert", "aria-live": "polite", children: submitError })), submitSuccess && (_jsxs("div", { className: styles.successMessage, role: "status", "aria-live": "polite", children: [_jsx("div", { className: styles.successIcon, children: "\u2713" }), _jsxs("div", { children: [_jsx("h4", { children: t.contact.successTitle }), _jsx("p", { children: t.contact.successText }), _jsxs("a", { className: styles.successWhatsApp, href: waPrefill, target: "_blank", rel: "noreferrer", children: [_jsx(FaWhatsapp, {}), " ", t.contact.successWhatsApp] })] })] }))] })] }) }) }), _jsxs("a", { href: `${WA_BASE_URL}?text=Hello%20${encodeURIComponent(COMPANY_NAME)}`, className: styles.whatsappFloat, target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", children: [_jsx(FaWhatsapp, {}), _jsx("span", { className: styles.tooltip, children: "Chat with us" })] })] }));
}
export default Contact;
