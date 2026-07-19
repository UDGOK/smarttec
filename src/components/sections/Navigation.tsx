"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks: { label: string; href: string; icon?: React.ReactNode; hasMenu?: boolean }[] = [
  {
    label: "Compute",
    href: "/compute",
    hasMenu: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
        <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
      </svg>
    ),
  },
  {
    label: "Calculator",
    href: "/calculator",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
        <path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM192,200H64V184H192Zm0-32H64V152H192Zm0-32H64V120H192Zm0-32H64V88H192Zm0-32H64V56H192Z" />
      </svg>
    ),
  },
  {
    label: "Inference",
    href: "/inference",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
      </svg>
    ),
  },
  {
    label: "Power",
    href: "/power",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
        <path d="M120,32L24,160h72l-16,64,96-128H104Z" />
      </svg>
    ),
  },
  {
    label: "AURA",
    href: "/aura",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
        <path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88Z" />
      </svg>
    ),
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
        <path d="M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z" />
      </svg>
    ),
  },
  {
    label: "Company",
    href: "/about",
    hasMenu: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
        <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z" />
      </svg>
    ),
  },
];

const computeMenu = [
  { title: "NVIDIA Compute", desc: "H100 · H200 · B200 · GB200", tag: "Training", color: "bg-greptile-green", href: "/compute" },
  { title: "Cerebras Inference", desc: "Fastest tokens on earth", tag: "Inference", color: "bg-peach", href: "/compute" },
  { title: "Features", desc: "The full SmartTec stack", color: "bg-seafoam", href: "/features" },
  { title: "AURA control plane", desc: "Predictive orchestration", color: "bg-lavender", href: "/aura" },
];

const companyMenu = [
  { title: "About", desc: "Our story + team", href: "/about" },
  { title: "Enterprise", desc: "Federal, federal-adjacent, large teams", href: "/enterprise" },
  { title: "Deployments", desc: "Pilot program", href: "/deployments" },
  { title: "Customers", desc: "Design partners", href: "/customers" },
  { title: "News", desc: "Live AI infrastructure feed", href: "/news" },
  { title: "Blog", desc: "Engineering + industry", href: "/blog" },
  { title: "Security", desc: "SOC 2 + compliance", href: "/security" },
];

function CaretIcon({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}>
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<"Compute" | "Company" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement banner — repositioned as "Now reserving" */}
      <div className="bg-greptile-green border-b border-slate/20">
        <div className="relative z-10 flex items-center justify-center h-10 sm:h-11 px-3 sm:px-4">
          <div className="flex max-w-7xl items-center justify-center gap-2 text-center">
            <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-black">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#28E99F">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <p className="font-space-mono text-[11px] sm:text-xs md:text-sm font-medium tracking-wide text-black">
              <span className="hidden md:inline">Now reserving first-wave capacity.</span>
              <span className="md:hidden">Now reserving.</span>
            </p>
            <Link href="#reserve" className="group inline-flex items-center gap-1 font-space-mono text-[11px] sm:text-xs md:text-sm font-medium tracking-wide text-black">
              <span className="underline underline-offset-2">Lock in launch pricing</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="relative" style={{ overflow: "visible" }}>
        <div
          className="relative z-10 border-b border-dashed border-slate/20"
          style={{ backgroundColor: "#EEEEEE" }}
        >
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center h-16 px-4 xl:px-8">
            <Link href="/" className="flex items-center group">
              <span className="group inline-flex">
                <Image src="/logo.svg" alt="SmartTec" width={180} height={50} className="h-9 w-auto group-hover:hidden animate-spark-in" priority />
                <Image src="/logo-green.svg" alt="SmartTec" width={180} height={50} className="h-9 w-auto hidden group-hover:block" priority />
              </span>
            </Link>
            <div className="flex-1" />

            <div className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasMenu && setOpenMenu(link.label as "Compute" | "Company")}
                  onMouseLeave={() => link.hasMenu && setOpenMenu(null)}
                >
                  {link.hasMenu ? (
                    <>
                      <button className={`font-space-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 px-2 -mx-2 py-1 ${openMenu === link.label ? "bg-greptile-green text-black" : "text-slate hover:bg-greptile-green hover:text-black"}`}>
                        {link.icon}
                        {link.label}
                        <CaretIcon open={openMenu === link.label} />
                      </button>
                      <AnimatePresence>
                        {openMenu === link.label && link.label === "Compute" && (
                          <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                          >
                            <div className="w-[640px] bg-fog border border-dashed border-silver shadow-2xl">
                              <div className="grid grid-cols-2 gap-px bg-silver">
                                {computeMenu.map((m) => (
                                  <Link key={m.title} href={m.href} className="group flex flex-col gap-1.5 p-4 bg-fog hover:bg-greptile-green/20 transition-colors text-left">
                                    <div className={`w-full h-14 ${m.color} relative overflow-hidden`}>
                                      <div className="absolute inset-0 bg-halftone opacity-30" />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-sans text-slate">
                                      <span className="font-anybody font-bold">{m.title}</span>
                                      {m.tag && (
                                        <span className="text-[9px] font-mono uppercase tracking-wider bg-neon text-slate px-1.5 py-0.5 rounded-sm">{m.tag}</span>
                                      )}
                                    </div>
                                    <span className="text-xs text-slate/60 leading-snug">{m.desc}</span>
                                  </Link>
                                ))}
                              </div>
                              <div className="px-4 py-3 bg-background border-t border-dashed border-silver flex items-center justify-between">
                                <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60">See all compute options</span>
                                <Link href="/compute" className="font-anybody font-bold text-sm text-slate hover:text-greptile-green">Explore compute →</Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {openMenu === link.label && link.label === "Company" && (
                          <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full right-0 pt-2 z-50"
                          >
                            <div className="w-[480px] bg-fog border border-dashed border-silver shadow-2xl">
                              <div className="grid grid-cols-1 gap-px bg-silver">
                                {companyMenu.map((m) => (
                                  <Link key={m.title} href={m.href} className="group flex items-start gap-3 p-4 bg-fog hover:bg-greptile-green/20 transition-colors text-left">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 mt-0.5 text-slate">
                                      <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z" />
                                    </svg>
                                    <div>
                                      <div className="text-sm font-anybody font-bold text-slate">{m.title}</div>
                                      <div className="text-xs text-slate/60 leading-snug">{m.desc}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={link.href} className="font-space-mono text-xs uppercase tracking-wider text-slate hover:bg-greptile-green hover:text-black transition-colors flex items-center gap-1.5 px-2 -mx-2 py-1">
                      {link.icon}
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex-1 flex justify-end pl-6">
              <div className="btn-hex-group">
                <Link href="/about" className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-slate hidden xl:inline-flex">
                  About
                </Link>
                <Link href="/contact" className="btn-hex-outline btn-hex-sm btn-hex !border-greptile-green !bg-greptile-green !text-black">
                  Reserve compute
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile nav */}
          <div className="flex lg:hidden items-center justify-between h-16 px-4 md:px-8">
            <Link href="/" className="flex items-center">
              <span className="group inline-flex">
                <Image src="/logo.svg" alt="SmartTec" width={140} height={36} className="h-8 w-auto" />
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/contact" className="btn-hex-outline btn-hex-sm btn-hex !border-greptile-green !bg-greptile-green !text-black">
                Reserve
              </Link>
              <button
                className="p-3 -mr-2 text-slate hover:bg-greptile-green hover:text-black transition-colors border border-dashed border-slate/40"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {mobileOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-fog border-b border-dashed border-silver overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col">
                {navLinks.map((link) => {
                  const hasSubmenu =
                    link.label === "Compute" || link.label === "Company";
                  const isOpen = openMenu === link.label;
                  const submenuItems =
                    link.label === "Compute"
                      ? (computeMenu as { title: string; desc?: string; tag?: string; color?: string; href: string }[])
                      : link.label === "Company"
                      ? (companyMenu as { title: string; desc?: string; tag?: string; color?: string; href: string }[])
                      : null;

                  return (
                    <div key={link.label} className="border-b border-dashed border-slate/20 last:border-b-0">
                      {hasSubmenu ? (
                        <>
                          <button
                            onClick={() => setOpenMenu(isOpen ? null : (link.label as "Compute" | "Company"))}
                            className={`w-full font-anybody font-bold text-base md:text-lg tracking-tight uppercase text-left transition-colors flex items-center justify-between gap-3 px-2 py-3 ${
                              isOpen ? "bg-greptile-green text-black" : "text-slate hover:bg-greptile-green/15"
                            }`}
            aria-expanded={isOpen}
            aria-controls={`mobile-submenu-${link.label}`}
          >
                            <span className="flex items-center gap-3">
                              {link.icon}
                              {link.label}
                            </span>
                            <CaretIcon open={isOpen} />
                          </button>
                          <AnimatePresence>
                            {isOpen && submenuItems && (
                              <motion.div
                                id={`mobile-submenu-${link.label}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-slate/5"
                              >
                                <div className="py-2 pl-6 pr-2 flex flex-col gap-1">
                                  {submenuItems.map((m) => (
                                    <Link
                                      key={m.title}
                                      href={m.href}
                                      className="font-anybody font-bold text-sm md:text-base text-slate hover:text-greptile-green transition-colors py-2 px-2 hover:bg-greptile-green/10"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      <span className="flex items-center gap-2">
                                        {m.color && (
                                          <span className={`inline-block w-1.5 h-1.5 ${m.color}`} />
                                        )}
                                        {m.title}
                                      </span>
                                      {m.desc && (
                                        <span className="block font-space-mono text-[10px] uppercase tracking-wider text-slate/55 mt-0.5">
                                          {m.desc}
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className="font-anybody font-bold text-base md:text-lg tracking-tight uppercase text-slate hover:bg-greptile-green hover:text-black transition-colors flex items-center gap-3 px-2 py-3"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.icon}
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTAs */}
                <div className="mt-4 pt-3 flex flex-col gap-2">
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-slate text-center justify-center"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-hex btn-hex-sm !border-greptile-green !bg-greptile-green !text-black text-center justify-center"
                  >
                    Reserve compute
                  </Link>
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