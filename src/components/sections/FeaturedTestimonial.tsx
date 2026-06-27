"use client";

import { motion } from "framer-motion";

interface Author {
  name: string;
  title: string;
  company: string;
  initials: string;
}

interface CompanyLogo {
  name: string;
  icon: string;
}

const featuredAuthor: Author = {
  name: "Sarah Chen",
  title: "VP of Infrastructure",
  company: "Nexus Technologies",
  initials: "SC",
};

const companyLogo: CompanyLogo = {
  name: "Nexus Technologies",
  icon: "NT",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function FeaturedTestimonial() {
  return (
    <section className="relative bg-[#0A0B0D] py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(184, 255, 92, 0.03) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Main testimonial card */}
          <div className="relative bg-[#111315] border border-[#1F2328] rounded-3xl p-8 sm:p-12 lg:p-16">
            {/* Decorative quote mark */}
            <div className="absolute -top-6 left-8 sm:left-12">
              <div className="relative flex items-center justify-center w-12 h-12">
                <div
                  className="absolute inset-0 rounded-xl rotate-45"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(184, 255, 92, 0.2) 0%, rgba(184, 255, 92, 0.05) 100%)",
                  }}
                />
                <svg
                  width="28"
                  height="28"
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
            <blockquote className="relative mb-10 sm:mb-12">
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed">
                SmartTec transformed our entire infrastructure approach. We
                achieved{" "}
                <span className="text-[#B8FF5C] font-semibold">
                  99.99% uptime
                </span>{" "}
                while reducing our carbon footprint by 60%. The autonomous
                energy systems are nothing short of revolutionary for our
                operations.
              </p>
            </blockquote>

            {/* Author section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  {/* Avatar background */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #B8FF5C 0%, #8ED64A 50%, #4A7A2A 100%)",
                    }}
                  />
                  {/* Inner circle */}
                  <div className="absolute inset-[3px] rounded-full bg-[#111315] flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-[#B8FF5C]">
                      {featuredAuthor.initials}
                    </span>
                  </div>
                  {/* Outer glow ring */}
                  <div
                    className="absolute -inset-1 rounded-full opacity-40"
                    style={{
                      background:
                        "linear-gradient(135deg, #B8FF5C, transparent, #B8FF5C)",
                      mask: "linear-gradient(#fff 0 0) content-box content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      padding: "2px",
                    }}
                  />
                </div>
              </div>

              {/* Author info */}
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {featuredAuthor.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {featuredAuthor.title}, {featuredAuthor.company}
                </p>
              </div>

              {/* Company logo */}
              <div className="flex-shrink-0">
                <div className="relative flex items-center justify-center w-28 h-12 sm:w-32 sm:h-14 rounded-lg border border-[#1F2328] bg-[#0D0E10] px-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(184, 255, 92, 0.15) 0%, rgba(184, 255, 92, 0.05) 100%)",
                        border: "1px solid rgba(184, 255, 92, 0.2)",
                      }}
                    >
                      <span className="text-[#B8FF5C] font-bold text-sm">
                        {companyLogo.icon.charAt(0)}
                      </span>
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">
                      {companyLogo.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover glow effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "0 0 60px rgba(184, 255, 92, 0.15)",
              }}
            />
          </div>

          {/* Stats row below card */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "60%", label: "Carbon Reduction" },
              { value: "3x", label: "Efficiency Gain" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="text-center p-4 rounded-xl border border-[#1F2328] bg-[#0D0E10]"
              >
                <div className="text-xl sm:text-2xl font-bold text-[#B8FF5C] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedTestimonial;
