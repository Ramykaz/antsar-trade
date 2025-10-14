
## **📥 HOW TO SAVE THIS AS README.MD:**

### **Option 1: Copy & Create File**
1. **Copy the entire text above**
2. **Create new file** in your project root called `README.md`
3. **Paste the content**
4. **Save and commit**

### **Option 2: PowerShell Command**
```powershell
@"
# 🌍 ANTSAR Foreign Trade Agency Website

A modern, responsive website for ANTSAR Foreign Trade Agency built with React, TypeScript, and Vite. Specializing in international trade solutions between Turkey and Africa.

![ANTSAR Website](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0-purple)

## 🚀 Live Demo

**Website:** [https://antsartrade.com](https://antsartrade.com)

## ✨ Features

- **Modern Design** - Clean, professional layout optimized for trade business
- **Full Responsive** - Mobile-first design that works on all devices
- **Fast Performance** - Optimized images and lazy loading
- **SEO Optimized** - Proper meta tags and Open Graph support
- **Multi-page Structure** - Comprehensive service and information pages
- **Contact Integration** - WhatsApp and email integration

## 📄 Pages

- **Home** - Hero section, services overview, industry expertise
- **About** - Company mission, vision, and values
- **Services** - Detailed service offerings with interactive sliders
- **Contact** - Contact form with WhatsApp integration
- **Terms of Service** - Legal terms and conditions
- **Privacy Policy** - Privacy and data protection information

## 🛠️ Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite (Build Tool)
- React Router (Navigation)
- CSS Modules (Styling)

**UI & Icons:**
- React Icons (Font Awesome, Feather Icons)
- Custom CSS with CSS Variables
- Responsive Design

**Deployment & Hosting:**
- Netlify (Hosting)
- Namecheap (Domain)
- SSL Certificate Enabled

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Ramykaz/antsar-trade.git
   cd antsar-trade
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

5. **Preview production build**
   \`\`\`bash
   npm run preview
   \`\`\`

## 📁 Project Structure

\`\`\`
antsar-trade/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── Terms.tsx
│   │   └── Privacy.tsx
│   ├── assets/
│   │   └── images/ (WebP optimized)
│   ├── App.tsx
│   └── main.tsx
├── netlify.toml
└── package.json
\`\`\`

## 🎨 Key Features Implemented

### Performance Optimizations
- ✅ WebP image format conversion
- ✅ Lazy loading for images
- ✅ CSS optimization and minification
- ✅ React lazy loading for components

### Mobile Responsiveness
- ✅ Mobile-first CSS approach
- ✅ Responsive navigation menu
- ✅ Touch-friendly sliders and buttons
- ✅ Optimized typography for all screen sizes

### Business Features
- ✅ Professional service presentations
- ✅ Industry expertise showcase
- ✅ Contact form with validation
- ✅ WhatsApp business integration
- ✅ Legal pages (Terms, Privacy)

## 🌐 Deployment

The website is automatically deployed to Netlify on every push to the \`main\` branch.

**Build Settings:**
- Build Command: \`npm run build\`
- Publish Directory: \`dist\`
- Node Version: 18

## 🔧 Configuration Files

- \`netlify.toml\` - Netlify deployment configuration
- \`tsconfig.json\` - TypeScript configuration
- \`vite.config.ts\` - Vite build configuration

## 📞 Contact & Business Information

**Company:** ANTSAR Foreign Trade Agency  
**Email:** antsartrade@gmail.com  
**Phone:** +90 542 261 87 56  
**Locations:** Ankara, Turkey & Addis Ababa, Ethiopia  

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is proprietary and belongs to ANTSAR Foreign Trade Agency.


---

**Built with ❤️ for global trade excellence**
"@ | Out-File -FilePath README.md -Encoding utf8