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
    icon: "/images/discovery.png",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Crafting a clear strategic direction, messaging and positioning.",
    icon: "/images/strategy.png",
  },
  {
    number: "03",
    title: "Creative Expression",
    description: "Transforming strategy into visuals, stories, and experiences.",
    icon: "/images/creative.png",
  },
  {
    number: "04",
    title: "Execution & Deployment",
    description: "Bringing the brand to life across digital and physical platforms.",
    icon: "/images/execution.png",
  },
  {
    number: "05",
    title: "Optimization & Support",
    description: "Ongoing improvement and support to ensure long-term growth.",
    icon: "/images/support.png",
  },
];

const values = [
  {
    title: "OUR PURPOSE",
    description:
      "To empower individuals and businesses with the creative intelligence and strategic clarity required to build brands that inspire loyalty, influence decisions, and drive growth.",
    icon: "/images/purpose.png",
  },
  {
    title: "OUR VISION",
    description:
      "To become Africa's leading brand and creative partner for businesses seeking to build through authentic connections and meaningful brand experiences.",
    icon: "/images/vision.png",
  },
  {
    title: "OUR MISSION",
    description:
      "To craft impactful brand identities, compelling content, and immersive digital experiences that connect businesses to their audiences with clarity, relevance, and emotional resonance.",
    icon: "/images/mission.png",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-100 pb-30 bg-[#101010] overflow-hidden min-h-[60vh] flex items-center">
        {/* Decorative Gradient Circles */}
        <div
          className="absolute top-40 left-60 w-[600px] h-[600px] opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
            transform: 'translate(-30%, -50%)',
            zIndex: 0,
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-40 right-60 w-[600px] h-[600px] opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
            transform: 'translate(30%, -50%)',
            zIndex: 0,
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute -bottom-6 left-1/2 w-[500px] h-[500px] opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
            transform: 'translate(-50%, 40%)',
            zIndex: 0,
            filter: 'blur(80px)',
          }}
        />
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-30 left-1/2 transform -translate-x-1/2"
        >
          <Image
            src="/images/vectors/vector1.svg"
            alt=""
            width={80}
            height={80}
          />
        </motion.div>

        {/* Sparkle decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-48 left-81"
        >
          <Image
            src="/images/vectors/vector2.svg"
            alt=""
            width={90}
            height={90}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-55 left-125"
        >
          <Image
            src="/images/vectors/vector3.svg"
            alt=""
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-70 left-70"
        >
          <Image
            src="/images/vectors/vector7.svg"
            alt=""
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-35 left-90"
        >
          <Image
            src="/images/vectors/vector8.svg"
            alt=""
            width={90}
            height={90}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-25 right-180"
        >
          <Image
            src="/images/vectors/vector9.svg"
            alt=""
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-52 right-120"
        >
          <Image
            src="/images/vectors/vector4.svg"
            alt=""
            width={70}
            height={70}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-60 right-75"
        >
          <Image
            src="/images/vectors/vector5.svg"
            alt=""
            width={90}
            height={90}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-80 right-70"
        >
          <Image
            src="/images/vectors/vector6.svg"
            alt=""
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-20 right-130"
        >
          <Image
            src="/images/vectors/vector10.svg"
            alt=""
            width={40}
            height={40}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-40 right-100"
        >
          <Image
            src="/images/vectors/vector11.svg"
            alt=""
            width={50}
            height={50}
          />
        </motion.div>

        <div className="container mx-auto -top-30 px-6 lg:px-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl lg:text-3xl text-[#FFFFFF] max-w-3xl mx-auto leading-relaxed"
          >
            We{" "}
            <span className="text-[#F88A21] font-normal">transform</span>{" "}
            brands into powerful storytellers <br /> through strategy, creativity, and
            design, shaping <br /> how they are perceived, experienced, and <br /> remembered.
          </motion.p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#F88A21]">
              WHAT WE DO
            </h2>
          </motion.div>

          {/* First 4 cards in 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-8xl mx-auto">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FBFAF8] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-sans text-xl font-bold mb-6 text-[#F88A21]">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 text-[#101010] text-lg"
                    >
                      <span className="text-sparq-[#F88A21] mt-1.5 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Last card centered */}
          <div className="flex justify-center mt-10 max-w-8xl mx-auto">
            {services.slice(4).map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#FBFAF8] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow w-full md:w-1/2"
              >
                <h3 className="font-sans text-xl font-bold mb-6 text-[#F88A21]">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 text-[#101010] text-lg"
                    >
                      <span className="text-sparq-[#F88A21] mt-1.5 text-xs">•</span>
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
      <section className="relative py-40 overflow-hidden min-h-[95vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/office-image.png"
            alt="Office"
            fill
            className="object-cover opacity-50"
            quality={70}
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto max-w-[1300px] px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-2xl border border-white/20 backdrop-blur-md"
                style={{
                  background: 'linear-gradient(90deg, rgba(248, 138, 33, 0.4) 0%, rgba(215, 107, 16, 0.4) 50%)'
                }}
              >
                <div className="flex justify-start mb-6">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-gloock text-left text-2xl font-bold text-[#F2F2F0] mb-4 tracking-wider">
                  {value.title}
                </h3>
                <p className="text-[#F2F2F0] text-left text-xl leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-16 bg-[#101010] overflow-hidden">
        {/* Decorative Glows */}
        <div
          className="absolute top-70 left-50 w-[500px] h-[500px] opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
            transform: 'translate(-40%, -40%)',
            zIndex: 0,
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-90 right-60 w-[500px] h-[500px] opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
            transform: 'translate(40%, 40%)',
            zIndex: 0,
            filter: 'blur(80px)',
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-4xl md:text-4xl font-bold text-sparq-white mb-3">
              Our Approach:{" "}
              <span className="text-sparq-orange">Clarity</span> in Every Step
            </h2>
            <p className="text-[#F2F2F0] max-w-4xl font-noto-sans font-normal mx-auto text-xl">
              We transform ambition into clarity through a proven five-phase methodology designed for sustainable growth.
            </p>
          </motion.div>

          {/* Process Steps - Zigzag Layout with Cards and Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D1B686] via-[#F4ECBA] to-[#F4ECBA] hidden md:block" style={{ transform: 'translateX(-50%)' }} />

            <div className="space-y-8 md:space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex ${index % 2 === 0 ? "justify-start md:pr-[56%]" : "justify-end md:pl-[56%]"
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
                    className={`absolute top-1/2 hidden md:block ${index % 2 === 0
                      ? "right-[calc(50%+18px)] left-auto"
                      : "left-[calc(50%+18px)] right-auto"
                      }`}
                    style={{
                      transform: "translateY(-50%)",
                      width: "clamp(36px, 1vw, 190px)",
                      borderTop: "1px solid rgba(244, 236, 186, 1)",
                    }}
                  />

                  {/* Card */}
                  <div className="bg-[#221911] border border-[#D1B686] rounded-xl p-6 w-full md:max-w-[400px]">
                    {/* Icon Box */}
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={30}
                      height={30}
                      className="object-contain mb-5"
                    />


                    {/* Content */}
                    <h3 className="font-sans text-xl font-bold text-[#F88A21] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#F2F2F0] text-lg font-noto-sans font-weight-normal leading-relaxed">{step.description}</p>
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
