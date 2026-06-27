"use client";

import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    initials: string;
  };
  logo: {
    name: string;
    icon: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The predictive maintenance features saved us over $2M in potential downtime costs. SmartTec's AI-driven insights are remarkably accurate.",
    author: {
      name: "Michael Torres",
      title: "CTO",
      company: "Quantum Dynamics",
      initials: "MT",
    },
    logo: {
      name: "Quantum Dynamics",
      icon: "QD",
    },
  },
  {
    id: 2,
    quote:
      "Integration was seamless. Within 48 hours, our entire fleet of 500+ devices was communicating through SmartTec's unified dashboard.",
    author: {
      name: "Elena Vasquez",
      title: "Head of IoT",
      company: "Nova Systems",
      initials: "EV",
    },
    logo: {
      name: "Nova Systems",
      icon: "NS",
    },
  },
  {
    id: 3,
    quote:
      "The energy optimization alone reduced our monthly bills by 34%. Combined with the predictive alerts, it's become essential to our operations.",
    author: {
      name: "James Okonkwo",
      title: "VP Operations",
      company: "Apex Manufacturing",
      initials: "JO",
    },
    logo: {
      name: "Apex Manufacturing",
      icon: "AM",
    },
  },
  {
    id: 4,
    quote:
      "Real-time monitoring across 12 global facilities gives us complete visibility. The autonomous responses have cut our incident response time by 80%.",
    author: {
      name: "Lisa Chen",
      title: "Director of Engineering",
      company: "Stratos Global",
      initials: "LC",
    },
    logo: {
      name: "Stratos Global",
      icon: "SG",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

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
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Client Success
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how forward-thinking companies are transforming their operations
            with SmartTec.
          </p>
        </motion.div>

        {/* 2x2 Grid of testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-[#111315] border border-[#1F2328] rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-[#B8FF5C]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#B8FF5C]/5">
                {/* Hover lime border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
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
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Author and logo section */}
                <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#1F2328]">
                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #B8FF5C 0%, #8ED64A 50%, #4A7A2A 100%)",
                        }}
                      />
                      <div className="absolute inset-[2px] rounded-full bg-[#111315] flex items-center justify-center">
                        <span className="text-sm font-bold text-[#B8FF5C]">
                          {testimonial.author.initials}
                        </span>
                      </div>
                    </div>

                    {/* Name and title */}
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {testimonial.author.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {testimonial.author.title}
                      </p>
                    </div>
                  </div>

                  {/* Company logo */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-20 h-10 rounded-lg border border-[#1F2328] bg-[#0D0E10] px-3">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-6 h-6 rounded flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(184, 255, 92, 0.15) 0%, rgba(184, 255, 92, 0.05) 100%)",
                            border: "1px solid rgba(184, 255, 92, 0.2)",
                          }}
                        >
                          <span className="text-[#B8FF5C] font-bold text-[10px]">
                            {testimonial.logo.icon.charAt(0)}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                          {testimonial.logo.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialWall;
