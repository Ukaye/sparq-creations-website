"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import ServiceTicker from "@/components/ServiceTicker";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "Industry-Level Expertise",
    description:
      "From local to global, we've helped companies in industries like fintech, real estate, and food establish memorable brands.",
    image: "/images/features/industry-level-expertise.png",
  },
  {
    title: "End-to-End Brand Experience",
    description:
      "From developing a marketing concept, a strategic engagement plan — we help brands discover clarity in the process.",
    image: "/images/features/end-to-end-brand-experience.png",
  },
  {
    title: "Data-Informed Creativity",
    description:
      "Our creative decisions are guided by what works in the Behavioral Market and what your audience are into beyond a niche.",
    image: "/images/features/data-informed-creativity.png",
  },
  {
    title: "Strategy Before Design",
    description:
      "Every call/hire we deliver is a result of in-depth research, brand definition, and product-to-market fit.",
    image: "/images/features/strategy-before-design.png",
  },
  {
    title: "Human-Centric Delivery",
    description:
      "We design brands that fulfill unspoken values, trust, and understanding in consumers.",
    image: "/images/features/human-centric-delivery.png",
  },
  {
    title: "Authentic Storytelling",
    description:
      "We tell brand stories that humans relate to, experience, and create emotions. Good stories.",
    image: "/images/features/authentic-storytelling.png",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1A1A1A] pt-40 pb-12 overflow-visible">
        {/* Service Ticker - Overlay on hero, full width */}
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
          <ServiceTicker variant="light" />
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-[2] text-center lg:text-left"
            >
              <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: '50px', lineHeight: '130%', letterSpacing: '0%', fontWeight: 700 }}>
                IGNITING BRANDS
                <br />
                <span className="text-[#E87A20]">UNLEASHING GROWTH</span>
              </h1>
              <p className="text-base md:text-lg text-white max-w-xl mb-8 mx-auto lg:mx-0">
                We are a forward-thinking brand and creative agency dedicated to
                helping businesses build{" "}
                <span className="text-[#E87A20]">
                  authentic connections
                </span>{" "}
                with their customers and audiences.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Let&apos;s Build Your Brand
              </Button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full mx-auto lg:mx-0 flex-shrink-0"
            >
              <div className="relative" style={{ width: '480px', maxWidth: '100%' }}>
                {/* Sunburst icon behind person */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1, left: '20%' }}>
                  <Image
                    src="/icon.svg"
                    alt="Sparq sunburst"
                    width={400}
                    height={400}
                    className="animate-spin-slow opacity-70"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden" style={{ zIndex: 2 }}>
                  <Image
                    src="/images/homepage-hero-image.png"
                    alt="Creative professional"
                    width={480}
                    height={614}
                    className="object-cover object-center"
                    style={{ width: '480px', height: '614px' }}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-12" style={{ background: 'linear-gradient(90deg, #D1B686 25%, #F4ECBA 50%)' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E87A20]/20 rounded-full text-[#E87A20] text-sm font-medium">
              <Image
                src="/images/icon.svg"
                alt="Sparq icon"
                width={16}
                height={16}
                className="inline-block"
              />
              Selected Works
            </span>
          </motion.div>

          {/* Collage Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-5xl mx-auto mb-8 group"
          >
            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
              <Image
                src="/images/selected-works.png"
                alt="Selected Works Collage"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
              {/* Overlay with button on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button href="/work" variant="primary">
                  View Our Works
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-[#1A1A1A] mb-4 text-center" style={{ fontSize: '40px', fontWeight: 600, lineHeight: '56px', letterSpacing: '0%' }}>
              Our Edge
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We don't start with visuals. We start with understanding your business, your audience, and your goals. 
            Then we build the brand that connects to both heart and logic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Africa Section */}
      <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 lg:max-w-md"
            >
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-4">
                World-class brand development, built for{" "}
                <span className="text-[#E87A20]">Africa and beyond.</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Our expertise spans diverse sectors, empowering visionaries and
                organizations ready to make their mark across Africa and globally.
              </p>
              <Button href="/about" variant="primary">
                View Our Services
              </Button>
            </motion.div>

            {/* Africa Map with Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative w-full"
            >
              <div className="relative w-full max-w-lg mx-auto aspect-square">
                {/* Africa map image with labels included */}
                <Image
                  src="/images/africa-vector-map.png"
                  alt="Africa map with service categories"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
