import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExchangeAlt, FaSearchLocation, FaShippingFast, FaFileContract, FaChartBar, FaSeedling, FaHardHat, FaTshirt, FaWineBottle, FaGem, } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import servicesHero from "../assets/services-hero.webp";
import impExpImg from "../assets/import-export.webp";
import strategicSourcingImg from "../assets/strategic-sourcing.webp";
import logisticsImg from "../assets/logistics.webp";
import customsImg from "../assets/customs.webp";
import marketIntelImg from "../assets/market-intelligence.webp";
import { useLanguage } from "../LanguageContext";
const serviceIcons = [
    _jsx(FaExchangeAlt, {}),
    _jsx(FaSearchLocation, {}),
    _jsx(FaShippingFast, {}),
    _jsx(FaFileContract, {}),
    _jsx(FaChartBar, {}),
];
const serviceImages = [
    impExpImg,
    strategicSourcingImg,
    logisticsImg,
    customsImg,
    marketIntelImg,
];
const industryIcons = [
    _jsx(FaSeedling, {}),
    _jsx(FaHardHat, {}),
    _jsx(FaTshirt, {}),
    _jsx(FaWineBottle, {}),
    _jsx(FaGem, {}),
];
const industryImages = [
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    // Cargo ship at a major port — Turkey–Africa maritime trade route context
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
];
const Services = () => {
    const { t } = useLanguage();
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 720, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
        ],
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        pauseOnHover: true,
    };
    return (_jsxs("div", { className: styles.servicesPage, children: [_jsxs("section", { className: styles.hero, children: [_jsx("div", { className: styles.heroOverlay }), _jsx("img", { src: servicesHero, alt: "Global Trade Services", className: styles.heroImage, loading: "lazy", decoding: "async" }), _jsxs("div", { className: styles.heroContent, children: [_jsx("p", { className: styles.eyebrow, children: t.services.eyebrow }), _jsx("h1", { children: t.services.heroTitle }), _jsx("p", { children: t.services.heroSubtitle })] })] }), _jsx("section", { className: styles.sectionLight, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.sectionHeader, children: [_jsx("p", { className: styles.sectionEyebrow, children: t.services.coreEyebrow }), _jsx("h2", { className: styles.sectionTitle, children: t.services.coreTitle }), _jsx("p", { className: styles.sectionSubtitle, children: t.services.coreSubtitle })] }), _jsx("div", { className: styles.servicesGrid, children: t.services.services.map((service, idx) => (_jsxs("div", { className: styles.serviceCard, children: [_jsx("span", { className: styles.cardAccent }), _jsx("div", { className: styles.serviceImage, style: { backgroundImage: `url(${serviceImages[idx]})` }, children: _jsx("div", { className: styles.serviceImageOverlay }) }), _jsxs("div", { className: styles.serviceContent, children: [_jsx("div", { className: styles.iconContainer, children: serviceIcons[idx] }), _jsx("h3", { children: service.title }), _jsx("p", { children: service.description }), _jsx("span", { className: styles.cardArrow, children: _jsx(FiArrowRight, {}) })] })] }, idx))) })] }) }), _jsx("section", { className: styles.sectionDark, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.sectionHeader, children: [_jsx("p", { className: styles.sectionEyebrow, children: t.services.industryEyebrow }), _jsx("h2", { className: styles.sectionTitle, children: t.services.industryTitle }), _jsx("p", { className: styles.sectionSubtitle, children: t.services.industrySubtitle })] }), _jsx(Slider, { ...sliderSettings, className: styles.industriesSlider, children: t.services.industries.map((industry, idx) => (_jsx("div", { className: styles.industrySlide, children: _jsxs("div", { className: styles.industryCard, children: [_jsx("div", { className: styles.industryBg, style: { backgroundImage: `url(${industryImages[idx]})` } }), _jsx("div", { className: styles.industryOverlay }), _jsxs("span", { className: styles.industryNumber, children: ["0", idx + 1] }), _jsxs("div", { className: styles.industryContent, children: [_jsx("div", { className: styles.industryIconWrap, children: industryIcons[idx] }), _jsx("h3", { children: industry.title }), _jsx("div", { className: styles.industryDivider }), _jsx("div", { className: styles.industryTags, children: industry.items.map((item, i) => (_jsx("span", { className: styles.industryTag, children: item }, i))) })] })] }) }, idx))) })] }) }), _jsx("section", { className: styles.processSection, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.sectionHeader, children: [_jsx("p", { className: styles.sectionEyebrow, children: t.services.processEyebrow }), _jsx("h2", { className: styles.sectionTitle, children: t.services.processTitle }), _jsx("p", { className: styles.sectionSubtitle, children: t.services.processSubtitle })] }), _jsx("div", { className: styles.processGrid, children: t.services.steps.map((p, i) => (_jsxs("div", { className: styles.processStep, children: [_jsxs("span", { className: styles.stepNumber, children: ["0", i + 1] }), _jsx("h3", { children: p.title }), _jsx("p", { children: p.desc })] }, i))) })] }) }), _jsx("section", { className: styles.ctaSection, children: _jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.ctaInner, children: [_jsx("h2", { children: t.services.ctaTitle }), _jsx("p", { children: t.services.ctaText }), _jsxs(Link, { to: "/contact", className: styles.ctaButton, children: [t.services.ctaBtn, " ", _jsx(FiArrowRight, {})] })] }) }) })] }));
};
export default Services;
