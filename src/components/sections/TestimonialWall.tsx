"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "We went from 4-hour outage events to zero. SmartTec paid for itself in 18 months.",
    author: {
      name: "Marcus Thompson",
      title: "CTO @ StackEdge Systems",
      image: "/img/exec1.jpg",
    },
  },
  {
    id: 2,
    quote: "The deployment was surgical. Our team barely had to lift a finger. Live in 90 days, exactly as promised.",
    author: {
      name: "Sarah Chen",
      title: "VP Operations @ CloudVault",
      image: "/img/exec2.jpg",
    },
  },
  {
    id: 3,
    quote: "We scaled from 50kW to 2MW without a single re-engineering cycle. That kind of flexibility is rare.",
    author: {
      name: "David Park",
      title: "CEO @ Prism Analytics",
      image: "/img/exec4.jpg",
    },
  },
  {
    id: 4,
    quote: "Enterprise-grade compliance documentation delivered upfront. Our procurement team was impressed before we even signed.",
    author: {
      name: "Rachel Torres",
      title: "CISO @ Fortis Networks",
      image: "/img/exec6.jpg",
    },
  },
];

export function TestimonialWall() {
  return (
    <section className="relative bg-[#E9EAE6] py-24 overflow-hidden">
      {/* Wireframe arc decoration in pale mint */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] opacity-[0.08]"
          viewBox="0 0 900 600"
          fill="none"
        >
          <path
            d="M450 550 C450 550, 50 400, 50 200 C50 50, 200 -50, 450 50 C700 -50, 850 50, 850 200 C850 400, 450 550, 450 550"
            stroke="#34E2A0"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M450 500 C450 500, 100 370, 100 200 C100 80, 230 0, 450 80 C670 0, 800 80, 800 200 C800 370, 450 500, 450 500"
            stroke="#34E2A0"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M450 450 C450 450, 150 340, 150 200 C150 110, 260 50, 450 110 C640 50, 750 110, 750 200 C750 340, 450 450, 450 450"
            stroke="#34E2A0"
            strokeWidth="1"
            fill="none"
          />
        </svg>
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
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#6B6B75] mb-6">
            [ WHAT OPERATORS ARE SAYING ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C38] mb-4" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
            No marketing speak. Just results.
          </h2>
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
              className="group"
            >
              {/* Card */}
              <div className="relative bg-[#F2F2EF] border border-[#D9DAD5] rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-[#34E2A0]">
                {/* Quote text */}
                <blockquote className="mb-8">
                  <p className="text-base sm:text-lg text-[#2C2C38]/80 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author section */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#D9DAD5]">
                  {/* Avatar */}
                  <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name and title */}
                  <div>
                    <h3 className="text-sm font-semibold text-[#2C2C38]">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-xs text-[#6B6B75]">
                      {testimonial.author.title}
                    </p>
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