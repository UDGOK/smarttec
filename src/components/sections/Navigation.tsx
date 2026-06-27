"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company" },
];

const resourceLinks = [
  { label: "Documentation", href: "#docs", description: "Guides and API reference" },
  { label: "Blog", href: "#blog", description: "Latest news and updates" },
  { label: "Case Studies", href: "#cases", description: "Customer success stories" },
  { label: "Help Center", href: "#help", description: "FAQs and support" },
];

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
      <div className="bg-lime-400/10 border-b border-lime-400/20">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center">
          <SectionLabel className="text-lime-400">
            <span className="inline-flex items-center gap-2">
              New: SmartTec AI Suite v2.0 — Now Available
              <a href="#announcement" className="ml-2 underline hover:no-underline">
                Learn more →
              </a>
            </span>
          </SectionLabel>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`
          transition-all duration-300
          ${isScrolled ? "bg-[#0A0B0D]/80 backdrop-blur-lg shadow-lg" : "bg-[#0A0B0D]"}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">S</span>
              </div>
              <span className="text-white font-semibold text-xl group-hover:text-lime-400 transition-colors">
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
                    <button className="text-gray-300 hover:text-lime-400 transition-colors flex items-center gap-1">
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
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-[#0A0B0D] border border-lime-400/20 rounded-lg shadow-xl p-2"
                        >
                          {resourceLinks.map((resource) => (
                            <a
                              key={resource.label}
                              href={resource.href}
                              className="block px-4 py-3 rounded-md hover:bg-lime-400/10 transition-colors group"
                            >
                              <div className="text-gray-200 group-hover:text-lime-400 font-medium">
                                {resource.label}
                              </div>
                              <div className="text-sm text-gray-500">{resource.description}</div>
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
                    className="text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Contact Sales
              </Button>
              <Button variant="primary" size="sm">
                Get started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-lime-400 p-2"
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
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0A0B0D] border-t border-lime-400/20 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        className="w-full text-left text-gray-300 hover:text-lime-400 py-2 flex items-center justify-between"
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
                                className="block text-gray-400 hover:text-lime-400 py-2"
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
                      className="block text-gray-300 hover:text-lime-400 py-2"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <div className="flex flex-col gap-3 pt-4 border-t border-lime-400/20">
                  <Button variant="secondary" size="md" className="w-full">
                    Contact Sales
                  </Button>
                  <Button variant="primary" size="md" className="w-full">
                    Get started
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