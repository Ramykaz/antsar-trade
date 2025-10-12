import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "app", children: [_jsx(Navbar, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/terms", element: _jsx(Terms, {}) }), _jsx(Route, { path: "/privacy", element: _jsx(Privacy, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
