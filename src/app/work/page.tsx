"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServiceTicker from "@/components/ServiceTicker";

const brandValues = [
  {
    title: "Authenticity",
    description: "We build brands that feel human.",
  },
  {
    title: "Innovation",
    description: "We design bold, future-ready solutions.",
  },
  {
    title: "Excellence",
    description: "We deliver premium outputs and measurable results.",
  },
  {
    title: "Clarity",
    description: "We simplify complexity into compelling communication.",
  },
  {
    title: "Connection",
    description: "Everything we create is designed to resonate emotionally.",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-sparq-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-md"
            >
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sparq-dark mb-4">
                <span className="text-sparq-orange">Our Work:</span>{" "}
                <span className="font-normal">The Proof is in the Process</span>
              </h1>
              <Button href="/contact" variant="primary" size="md">
                Get a Quote
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-sm"
            >
              <p className="text-sparq-gray-dark text-sm">
                We do more than branding, we engineer{" "}
                <span className="font-semibold text-sparq-dark">relevance</span>.
                We bridge business goals with{" "}
                <span className="font-semibold text-sparq-dark">human emotion</span>.
                We help brands show up boldly, communicate clearly, and grow{" "}
                <span className="font-semibold text-sparq-dark">sustainably</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-8 bg-sparq-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <PortfolioGrid showFilters />
        </div>
      </section>

      {/* Service Ticker */}
      <ServiceTicker variant="light" />

      {/* Brand Values Section */}
      <section className="py-16 bg-sparq-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-sparq-white">
              Our Brand{" "}
              <span className="text-sparq-orange">Values</span>
            </h2>
          </motion.div>

          {/* Values Grid - Pyramid Layout */}
          <div className="max-w-3xl mx-auto">
            {/* First Row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {brandValues.slice(0, 3).map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sparq-cream rounded-xl p-5 text-center"
                >
                  <span className="text-sparq-orange text-xl mb-2 block">✦</span>
                  <h3 className="font-sans text-base font-bold text-sparq-dark mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sparq-gray-dark text-xs">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
              {brandValues.slice(3, 5).map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  className="bg-sparq-cream rounded-xl p-5 text-center"
                >
                  <span className="text-sparq-orange text-xl mb-2 block">✦</span>
                  <h3 className="font-sans text-base font-bold text-sparq-dark mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sparq-gray-dark text-xs">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/office-image.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-sparq-dark/70" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto text-center bg-sparq-dark/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="font-sans text-xl md:text-2xl font-bold text-sparq-white mb-1">
              Ready to Make your Brand
            </h2>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-sparq-orange mb-6">
              Unforgettable?
            </h3>
            <Button href="/contact" variant="primary" size="md">
              Book a Consultation
            </Button>
            {/* Decorative squiggle */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -right-2 bottom-6"
            >
              <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
                <path
                  d="M5 15 Q15 5 25 15 Q35 25 45 15"
                  stroke="#E87A20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
