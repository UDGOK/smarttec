"use client";

import { motion } from "framer-motion";

// Product Links
const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "API Docs", href: "#api" },
];

// Company Links
const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Press", href: "#press" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

// Resources Links
const resourceLinks = [
  { label: "Documentation", href: "#docs" },
  { label: "Blog", href: "#blog" },
  { label: "Case Studies", href: "#cases" },
  { label: "Help Center", href: "#help" },
  { label: "Community", href: "#community" },
  { label: "Webinars", href: "#webinars" },
];

// Support Links
const supportLinks = [
  { label: "Getting Started", href: "#getting-started" },
  { label: "FAQ", href: "#faq" },
  { label: "System Status", href: "#status" },
  { label: "Security", href: "#security" },
  { label: "Compliance", href: "#compliance" },
  { label: "Report Issue", href: "#report" },
];

// Social Icons
const socialLinks = [
  {
    name: "Twitter",
    href: "#twitter",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#github",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#linkedin",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "#discord",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#youtube",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

// Energy Core SVG Background
function EnergyCoreBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-[800px] h-[800px] -bottom-1/4 -right-1/4 opacity-[0.03]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="#BEF264" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" stroke="#BEF264" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke="#BEF264" strokeWidth="1" />
        <circle cx="200" cy="200" r="90" stroke="#BEF264" strokeWidth="1" />
        <circle cx="200" cy="200" r="60" stroke="#BEF264" strokeWidth="1" />
        <circle cx="200" cy="200" r="30" stroke="#BEF264" strokeWidth="1" />
        <circle cx="200" cy="200" r="10" fill="#BEF264" fillOpacity="0.5" />
        {/* Radial lines */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + 180 * Math.cos((i * Math.PI) / 6)}
            y2={200 + 180 * Math.sin((i * Math.PI) / 6)}
            stroke="#BEF264"
            strokeWidth="0.5"
          />
        ))}
        {/* Energy pulses */}
        <circle cx="200" cy="200" r="120" stroke="#BEF264" strokeWidth="0.5" strokeDasharray="10 5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="30s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="200" cy="200" r="150" stroke="#BEF264" strokeWidth="0.5" strokeDasharray="15 10">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 200 200"
            to="0 200 200"
            dur="40s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      {/* Secondary decorative element - top left */}
      <svg
        className="absolute w-[400px] h-[400px] -top-1/4 -left-1/4 opacity-[0.02]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="#BEF264" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="120" stroke="#BEF264" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="60" stroke="#BEF264" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="5" fill="#BEF264" fillOpacity="0.3" />
      </svg>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0B0D] border-t border-lime-400/10">
      <EnergyCoreBackground />
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-20">
        {/* Top Section - Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-black font-bold text-xl">S</span>
              </div>
              <span className="text-white font-bold text-2xl group-hover:text-lime-400 transition-colors">
                SmartTec
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering businesses with intelligent automation and next-generation technology solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-[#1a1b1e] flex items-center justify-center text-gray-400 hover:bg-lime-400/10 hover:text-lime-400 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns - 4 columns on desktop */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-lime-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-lime-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-lime-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Support
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-lime-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-lime-400/10 pt-10 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Stay up to date</h4>
              <p className="text-gray-400 text-sm">Get the latest news and updates delivered to your inbox.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-[#1a1b1e] border border-lime-400/20 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/20 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-lime-400 text-black font-semibold text-sm rounded-lg hover:bg-lime-300 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-lime-400/10" />
      </div>

      {/* Copyright Bar */}
      <div className="relative border-t border-lime-400/10 bg-[#08090a]">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} SmartTec Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <a href="#privacy" className="text-gray-500 text-sm hover:text-lime-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 text-sm hover:text-lime-400 transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-500 text-sm hover:text-lime-400 transition-colors">
                Cookie Policy
              </a>
              <a href="#sitemap" className="text-gray-500 text-sm hover:text-lime-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
