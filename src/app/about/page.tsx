"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    category: "Brand Development & Strategy",
    items: [
      "Brand Identity Design",
      "Brand Messaging & Storytelling",
      "Brand Positioning",
      "Brand Identity Refresh/Redesign",
      "Consumer & Market Analysis",
      "Brand Research & Building Programs",
    ],
  },
  {
    category: "Creative Design & Visual Communications",
    items: [
      "Social Media Visuals & Templates",
      "Marketing Collateral (Brochures, Flyers, etc.)",
      "Product Packaging Design",
      "Environment Branding",
      "UI/UX Design (Websites, Apps etc.)",
    ],
  },
  {
    category: "Digital Content & Campaign Creative",
    items: [
      "Social Media Content Creation",
      "Campaign Concept & Art Direction",
      "Story Design & Motion Animations",
      "Presentation Design (Pitch Decks, etc.)",
      "Copywriting (Captions, Websites, Print Materials)",
    ],
  },
  {
    category: "Brand Experience & Engagement",
    items: [
      "Customer Experience Mapping",
      "Event Branding & Collateral",
      "Community Building Activations/Campaigns",
      "Partnership Activation/Collaboration Ideas & Execution",
      "Personalized Brand Experiences Workflows",
    ],
  },
  {
    category: "Creative Consulting & Training",
    items: [
      "Brand Audits & Evaluations",
      "Creative Consultation & Advisory",
      "Design Direction",
      "Personal & Corporate Branding Coaching",
      "Workshops for Teams & Leaders",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Insights Gathering",
    description: "Understanding your business, audience, culture and goals.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Crafting a clear strategic direction, messaging and positioning.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Creative Expression",
    description: "Transforming strategy into visuals, stories, and experiences.",
    icon: "💡",
  },
  {
    number: "04",
    title: "Execution & Deployment",
    description: "Bringing the brand to life across digital and physical platforms.",
    icon: "🚀",
  },
  {
    number: "05",
    title: "Optimization & Support",
    description: "Ongoing improvement and support to ensure long-term growth.",
    icon: "⚙️",
  },
];

const values = [
  {
    title: "OUR PURPOSE",
    description:
      "To empower individuals and businesses with the creative intelligence and strategic clarity required to build brands that inspire loyalty, influence decisions, and drive growth.",
  },
  {
    title: "OUR VISION",
    description:
      "To become Africa's leading brand and creative partner for businesses seeking to build through authentic connections and meaningful brand experiences.",
  },
  {
    title: "OUR MISSION",
    description:
      "To craft impactful brand identities, compelling content, and immersive digital experiences that connect businesses to their audiences with clarity, relevance, and emotional resonance.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-50 pb-24 bg-sparq-dark overflow-hidden min-h-[40vh] flex items-center">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2"
        >
          <Image
            src="/images/vectors/vector10.svg"
            alt=""
            width={45}
            height={59}
            className="opacity-60"
          />
        </motion.div>

        {/* Sparkle decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-24 right-1/4"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#E87A20">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-32 left-1/4"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#E87A20" opacity="0.6">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-sparq-gray max-w-3xl mx-auto leading-relaxed"
          >
            We{" "}
            <span className="text-sparq-orange font-semibold italic">transform</span>{" "}
            brands into powerful storytellers through strategy, creativity, and
            design, shaping how they are perceived, experienced, and remembered.
          </motion.p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-sparq-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-sparq-dark">
              WHAT WE DO
            </h2>
          </motion.div>

          {/* First 4 cards in 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-sans text-sm font-bold mb-3 text-sparq-orange">
                  {service.category}
                </h3>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sparq-gray-dark text-sm"
                    >
                      <span className="text-sparq-orange mt-1.5 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Last card centered */}
          <div className="flex justify-center mt-6 max-w-4xl mx-auto">
            {services.slice(4).map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow w-full md:w-1/2"
              >
                <h3 className="font-sans text-sm font-bold mb-3 text-sparq-orange">
                  {service.category}
                </h3>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sparq-gray-dark text-sm"
                    >
                      <span className="text-sparq-orange mt-1.5 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/office-image.png"
            alt="Office"
            fill
            className="object-cover"
            quality={70}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-sparq-dark/85" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="font-sans text-sm font-bold text-sparq-orange mb-3 tracking-wider">
                  {value.title}
                </h3>
                <p className="text-sparq-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-sparq-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-sparq-white mb-3">
              Our Approach:{" "}
              <span className="text-sparq-orange">Clarity</span> in Every Step
            </h2>
            <p className="text-sparq-gray max-w-xl mx-auto text-sm">
              We transform ambition into clarity through a proven five-phase methodology designed for sustainable growth.
            </p>
          </motion.div>

          {/* Process Steps - Zigzag Layout with Cards and Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sparq-orange/20 via-sparq-orange/40 to-sparq-orange/20 hidden md:block" style={{ transform: 'translateX(-50%)' }} />
            
            <div className="space-y-8 md:space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start md:pr-[60%]" : "justify-end md:pl-[60%]"
                  }`}
                >
                {/* Timeline Icon */}
                <div
                  className="absolute left-1/2 top-1/2 hidden md:block"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <Image
                    src="/images/icon.svg"
                    alt="Timeline marker"
                    width={48}
                    height={48}
                    className="opacity-80"
                  />
                </div>
                
                {/* Horizontal Connector Line */}
                <div
                  className={`absolute top-1/2 hidden md:block ${
                    index % 2 === 0
                      ? "right-[calc(50%+24px)] left-auto"
                      : "left-[calc(50%+24px)] right-auto"
                  }`}
                  style={{
                    transform: "translateY(-50%)",
                    width: "clamp(40px, 8vw, 120px)",
                    borderTop: "2px solid rgba(232, 122, 32, 0.3)",
                  }}
                />
                  
                  {/* Card */}
                  <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 w-full md:max-w-[320px] ${
                    index % 2 === 0 ? "" : "text-right"
                  }`}>
                    {/* Icon Box */}
                    <div className={`w-14 h-14 bg-sparq-dark border border-sparq-orange/30 rounded-xl flex items-center justify-center mb-4 ${
                      index % 2 === 0 ? "" : "ml-auto"
                    }`}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87A20" strokeWidth="1.5">
                        {index === 0 && <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>}
                        {index === 1 && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></>}
                        {index === 2 && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
                        {index === 3 && <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></>}
                        {index === 4 && <><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m17.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l-1.41-1.41M6.34 6.34L4.93 4.93"/></>}
                      </svg>
                    </div>

                    {/* Content */}
                    <h3 className="font-sans text-lg font-bold text-sparq-orange mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sparq-gray text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
