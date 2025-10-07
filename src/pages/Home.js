import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FiGlobe, FiTrendingUp, FiShield, FiCompass, FiBox, FiShoppingBag, FiCoffee, FiHome } from 'react-icons/fi';
import heroImage from '../assets/hero-image.webp';
const industries = [
    { title: "Agriculture", icon: _jsx(FiCoffee, {}), description: "Premium sourcing of coffee, spices, and agricultural commodities" },
    { title: "Construction", icon: _jsx(FiHome, {}), description: "Building materials and industrial supplies" },
    { title: "Textiles", icon: _jsx(FiShoppingBag, {}), description: "Quality garment manufacturing connections" },
    { title: "Commodities", icon: _jsx(FiBox, {}), description: "Bulk trading with transparent pricing" }
];
const services = [
    { title: "Market Entry", icon: _jsx(FiGlobe, {}), description: "Strategic guidance for expanding into new territories" },
    { title: "Commodity Trading", icon: _jsx(FiTrendingUp, {}), description: "Reliable sourcing and distribution networks" },
    { title: "Risk Management", icon: _jsx(FiShield, {}), description: "Protecting your interests in volatile markets" },
    { title: "Logistics Strategy", icon: _jsx(FiCompass, {}), description: "Optimized supply chain solutions" }
];
const Home = () => {
    return (_jsxs("div", { className: styles.home, children: [_jsxs("section", { className: styles.hero, children: [_jsx("img", { src: heroImage, alt: "Global Trade", className: styles.heroImage }), _jsx("div", { className: styles.heroOverlay }), _jsxs("div", { className: styles.heroContent, children: [_jsxs("h1", { className: styles.logo, children: ["Antsar ", _jsx("span", { children: "Foreign Trade Agency" })] }), _jsx("p", { className: styles.tagline, children: "Where Precision Meets Global Opportunity" }), _jsxs("div", { className: styles.ctaGroup, children: [_jsx(Link, { to: "/services", className: styles.primaryCta, children: "Explore Services" }), _jsx(Link, { to: "/contact", className: styles.secondaryCta, children: "Contact Us" })] })] })] }), _jsxs("section", { className: styles.section, children: [_jsxs("div", { className: styles.sectionHeader, children: [_jsx("h2", { children: "Tailored Trade Solutions" }), _jsx("p", { children: "Comprehensive services for seamless cross-border commerce" })] }), _jsx("div", { className: styles.grid, children: services.map((service, index) => (_jsxs("div", { className: styles.card, children: [_jsx("div", { className: styles.iconWrapper, children: service.icon }), _jsx("h3", { children: service.title }), _jsx("p", { children: service.description })] }, index))) })] }), _jsxs("section", { className: `${styles.section} ${styles.altSection}`, children: [_jsxs("div", { className: styles.sectionHeader, children: [_jsx("h2", { children: "Industry Expertise" }), _jsx("p", { children: "Sectors where we deliver exceptional results" })] }), _jsx("div", { className: styles.grid, children: industries.map((industry, index) => (_jsxs("div", { className: styles.card, children: [_jsx("div", { className: styles.iconWrapper, children: industry.icon }), _jsx("h3", { children: industry.title }), _jsx("p", { children: industry.description })] }, index))) })] })] }));
};
export default Home;
