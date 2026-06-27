"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "SmartTec solved our biggest infrastructure problem. We went from 4-hour outage incidents to zero. The battery stack paid for itself in 18 months.",
    author: {
      name: "Jennifer Walsh",
      title: "CTO",
      company: "Nexus Data",
      image: "/img/exec1.jpg",
    },
  },
  {
    id: 2,
    quote: "The deployment was surgical. SmartTec's team handled everything from site survey to commissioning. We barely had to lift a finger.",
    author: {
      name: "David Park",
      title: "VP Operations",
      company: "CloudVault",
      image: "/img/exec2.jpg",
    },
  },
  {
    id: 3,
    quote: "Finally, infrastructure that keeps up with our growth. We scaled from 50kW to 2MW without a single re-engineering cycle.",
    author: {
      name: "Sarah Chen",
      title: "CEO",
      company: "Prism Analytics",
      image: "/img/exec4.jpg",
    },
  },
  {
    id: 4,
    quote: "Enterprise-grade reliability at a fraction of the cost of traditional colocation. The SOC 2 compliance documentation alone saved us months.",
    author: {
      name: "Rachel Torres",
      title: "CISO",
      company: "Fortis Networks",
      image: "/img/exec6.jpg",
    },
  },
];

export function TestimonialWall() {
  return (
    <section className="relative bg-[#0A0B0D] py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(184, 255, 92, 0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1F2328] bg-[#111315] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#B8FF5C]" />
            <span className="text-sm font-medium text-[#8A8F98] uppercase tracking-wider">
              Client Success
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#8A8F98] max-w-2xl mx-auto">
            See how forward-thinking companies are transforming their operations
            with SmartTec.
          </p>
        </motion.div>

        {/* 2x2 Grid of testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-[#111315] border border-[#1F2328] rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-[#B8FF5C]/40">
                {/* Hover lime border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(184, 255, 92, 0.3)",
                  }}
                />

                {/* Quote icon */}
                <div className="mb-6">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-lg rotate-45"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(184, 255, 92, 0.15) 0%, rgba(184, 255, 92, 0.05) 100%)",
                      }}
                    />
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="relative text-[#B8FF5C]"
                    >
                      <path
                        d="M11 7V11C11 12.6569 9.65685 14 8 14H6V16H8C10.2091 16 12 14.2091 12 12V7H11ZM20 7V11C20 12.6569 18.6569 14 17 14H15V16H17C19.2091 16 21 14.2091 21 12V7H20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="mb-8">
                  <p className="text-base sm:text-lg text-[#F5F5F2]/90 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author and logo section */}
                <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#1F2328]">
                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 rounded-full ring-1 ring-[#B8FF5C]/20" />
                    </div>

                    {/* Name and title */}
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {testimonial.author.name}
                      </h3>
                      <p className="text-xs text-[#8A8F98]">
                        {testimonial.author.title} at {testimonial.author.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialWall;
