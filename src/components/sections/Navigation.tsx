"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Deployments", href: "#deployments" },
  { label: "R&D", href: "#rd" },
  { label: "Company", href: "#company" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Contact", href: "#contact" },
];

const resourceLinks = [
  { label: "Documentation", href: "#docs", description: "Technical guides and API reference" },
  { label: "Case Studies", href: "#cases", description: "Customer deployment stories" },
  { label: "Blog", href: "#blog", description: "Industry insights and news" },
  { label: "Support", href: "#support", description: "Help center and contact" },
];

// Chamfered diamond/cube SVG glyph
function LogoGlyph() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className="flex-shrink-0"
    >
      {/* Main cube shape with chamfered corners */}
      <path
        d="M14 2L24 9V19L14 26L4 19V9L14 2Z"
        fill="#2C2C38"
        stroke="#2C2C38"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Top face highlight */}
      <path
        d="M14 2L24 9L14 13L4 9L14 2Z"
        fill="#3A3A48"
      />
      {/* Left face */}
      <path
        d="M4 9L14 13V23L4 19V9Z"
        fill="#242430"
      />
      {/* Right face */}
      <path
        d="M24 9L14 13V23L24 19V9Z"
        fill="#1E1E28"
      />
      {/* Center accent dot */}
      <circle cx="14" cy="14" r="2" fill="#34E2A0" />
    </svg>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Banner */}
      <div 
        className="bg-[#34E2A0]" 
        style={{ boxShadow: isScrolled ? 'none' : '0 1px 0 rgba(0,0,0,0.05)' }}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-center">
          <a 
            href="#announcement" 
            className="text-sm font-medium text-[#2C2C38] hover:underline flex items-center gap-1"
          >
            New: 2MW deployment in Phoenix now operational →
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`
          transition-all duration-300
          bg-[#E9EAE6]
          border-b border-[#D9DAD5]
          ${isScrolled ? "shadow-md" : ""}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <LogoGlyph />
              <span 
                className="text-[#2C2C38] font-bold text-2xl tracking-tight"
                style={{ fontFamily: "'Archivo Expanded', sans-serif", fontWeight: 800 }}
              >
                SmartTec
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <button className="text-[#2C2C38]/80 hover:text-[#34E2A0] transition-colors flex items-center gap-1 font-medium text-sm">
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isResourcesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-[#F5F5F2] border border-[#D9DAD5] rounded-lg shadow-lg p-2"
                        >
                          {resourceLinks.map((resource) => (
                            <a
                              key={resource.label}
                              href={resource.href}
                              className="block px-4 py-3 rounded-md hover:bg-[#34E2A0]/10 transition-colors group"
                            >
                              <div className="text-[#2C2C38] group-hover:text-[#34E2A0] font-medium text-sm">
                                {resource.label}
                              </div>
                              <div className="text-xs text-[#6E7079]">{resource.description}</div>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#2C2C38]/80 hover:text-[#34E2A0] transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm">
                Contact Sales
              </Button>
              <Button variant="accent" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#2C2C38] hover:text-[#34E2A0] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#E9EAE6] border-t border-[#D9DAD5] overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        className="w-full text-left text-[#2C2C38]/80 hover:text-[#34E2A0] py-2 flex items-center justify-between"
                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isResourcesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 mt-2"
                          >
                            {resourceLinks.map((resource) => (
                              <a
                                key={resource.label}
                                href={resource.href}
                                className="block text-[#6E7079] hover:text-[#34E2A0] py-2 text-sm"
                              >
                                {resource.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-[#2C2C38]/80 hover:text-[#34E2A0] py-2"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <div className="flex flex-col gap-3 pt-4 border-t border-[#D9DAD5]">
                  <Button variant="outline" size="md" className="w-full">
                    Contact Sales
                  </Button>
                  <Button variant="accent" size="md" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navigation;
