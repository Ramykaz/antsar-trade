import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExchangeAlt, FaSearchLocation, FaShippingFast, FaFileContract, FaChartBar, FaSeedling, FaHardHat, FaTshirt, FaWineBottle, } from "react-icons/fa";
import styles from "./Services.module.css";
import servicesHero from "../assets/services-hero.webp";
// Import your images for Core Services here:
import impExpImg from "../assets/import-export.webp";
import strategicSourcingImg from "../assets/strategic-sourcing.webp";
import logisticsImg from "../assets/logistics.webp";
import customsImg from "../assets/customs.webp";
import marketIntelImg from "../assets/market-intelligence.webp";
const Services = () => {
    const services = [
        {
            icon: _jsx(FaExchangeAlt, { className: styles.serviceIcon }),
            title: "Import/Export Management",
            description: "End-to-end oversight of cross-border transactions with comprehensive documentation handling and compliance assurance.",
            image: impExpImg,
        },
        {
            icon: _jsx(FaSearchLocation, { className: styles.serviceIcon }),
            title: "Strategic Sourcing",
            description: "Identification and vetting of premium global suppliers with negotiated contractual terms for optimal value.",
            image: strategicSourcingImg,
        },
        {
            icon: _jsx(FaShippingFast, { className: styles.serviceIcon }),
            title: "Logistics Coordination",
            description: "Seamless multimodal transportation solutions with real-time shipment tracking and customs management.",
            image: logisticsImg,
        },
        {
            icon: _jsx(FaFileContract, { className: styles.serviceIcon }),
            title: "Customs Compliance",
            description: "Expert navigation of tariff classifications, trade regulations, and duty optimization strategies.",
            image: customsImg,
        },
        {
            icon: _jsx(FaChartBar, { className: styles.serviceIcon }),
            title: "Market Intelligence",
            description: "Data-driven insights on emerging markets, competitive landscapes, and optimal entry strategies.",
            image: marketIntelImg,
        },
    ];
    const industries = [
        {
            title: "Agriculture",
            items: ["Coffee & Tea", "Spices & Herbs", "Oilseeds", "Grains & Pulses", "Horticulture"],
            icon: _jsx(FaSeedling, { className: styles.industryIcon }),
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Construction",
            items: [
                "Structural Steel",
                "Cement & Aggregates",
                "Ceramic Tiles",
                "Plumbing Fixtures",
                "Electrical Components",
            ],
            icon: _jsx(FaHardHat, { className: styles.industryIcon }),
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Textiles",
            items: ["Apparel & Garments", "Home Textiles", "Technical Fabrics", "Accessories", "Footwear"],
            icon: _jsx(FaTshirt, { className: styles.industryIcon }),
            image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Food & Beverage",
            items: ["Processed Foods", "Beverages", "Spices & Condiments", "Confectionery", "Dairy Products"],
            icon: _jsx(FaWineBottle, { className: styles.industryIcon }),
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        },
    ];
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 },
            },
        ],
        arrows: true,
        autoplay: false,
    };
    return (_jsxs("div", { className: styles.servicesPage, children: [_jsxs("section", { className: styles.hero, children: [_jsx("div", { className: styles.heroOverlay }), _jsx("img", { src: servicesHero, alt: "Global Trade Services", className: styles.heroImage, loading: "lazy", decoding: "async" }), _jsxs("div", { className: styles.heroContent, children: [_jsx("h1", { children: "Our Trade Solutions" }), _jsx("p", { children: "Comprehensive services designed for seamless international commerce" })] })] }), _jsx("section", { className: styles.sectionLight, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.sectionHeader, children: [_jsx("h2", { className: styles.sectionTitle, children: "Core Services" }), _jsx("p", { className: styles.sectionSubtitle, children: "Tailored solutions for your global trade requirements" })] }), _jsx("div", { className: styles.servicesGrid, children: services.map((service, idx) => (_jsx("div", { className: styles.flipCard, children: _jsxs("div", { className: styles.flipCardInner, children: [_jsx("div", { className: styles.flipCardFront, style: { backgroundImage: `url(${service.image})` } }), _jsxs("div", { className: styles.flipCardBack, children: [_jsx("div", { className: styles.iconContainer, children: service.icon }), _jsx("h3", { children: service.title }), _jsx("p", { children: service.description })] })] }) }, idx))) })] }) }), _jsx("section", { className: styles.sectionDark, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.sectionHeader, children: [_jsx("h2", { className: styles.sectionTitle, children: "Industry Expertise" }), _jsx("p", { className: styles.sectionSubtitle, children: "Sectors where we deliver exceptional results" })] }), _jsx(Slider, { ...sliderSettings, className: styles.industriesSlider, children: industries.map((industry, idx) => (_jsx("div", { className: styles.industrySlide, children: _jsxs("div", { className: styles.industryImage, style: { backgroundImage: `url(${industry.image})` }, children: [_jsx("div", { className: styles.industryOverlay }), _jsxs("div", { className: styles.industryContent, children: [_jsx("div", { className: styles.industryIconContainer, children: industry.icon }), _jsx("h3", { children: industry.title }), _jsx("ul", { className: styles.industryList, children: industry.items.map((item, i) => (_jsxs("li", { children: [_jsx("span", { className: styles.bullet }), item] }, i))) })] })] }) }, idx))) })] }) })] }));
};
export default Services;
