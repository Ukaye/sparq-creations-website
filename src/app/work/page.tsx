"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button, ServiceTicker, PortfolioGrid } from "@/components";

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
      <section className="pt-28 pb-12 bg-sparq-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-sparq-dark mt-20 mb-4">
                <span className="text-sparq-orange">Our Work:</span>{" "}
                <span className="font-semibold">The Proof is in the <br /> Process</span>
              </h1>
              <Button href="/contact" variant="primary" size="md" >
                Get a Quote
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-sm"
            >
              <p className="text-sparq-gray-dark text-md mt-20">
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
      <section className="py-8 bg-sparq-white">
        <div className="container mx-auto px-6 lg:px-12 -mb-80">
          <PortfolioGrid />
        </div>
      </section>


      {/* Service Ticker */}
      <ServiceTicker variant="light" />

      {/* Brand Values Section */}
      <section className="py-16 bg-[#101010] relative overflow-hidden">
        {/* Decorative Circle Top Right */}
        <div
          className="absolute top-0 right-50 w-[600px] h-[600px] opacity-20 pointer-events-none mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
            transform: 'translate(30%, -30%)',
            zIndex: 0,
            filter: 'blur(60px)',
          }}
        />

        {/* Decorative Circle Top Left */}
        <div
          className="absolute top-0 left-50 w-[600px] h-[600px] opacity-20 pointer-events-none mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
            transform: 'translate(-30%, -20%)',
            zIndex: 0,
            filter: 'blur(60px)',
          }}
        />

        {/* Decorative Circle Bottom Center */}
        <div
          className="absolute bottom-0 left-1/2 w-[500px] h-[500px] opacity-30 pointer-events-none mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
            transform: 'translate(-50%, 40%)',
            zIndex: 0,
            filter: 'blur(80px)',
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 mt-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-sparq-white">
              Our Brand{" "}
              <span className="text-sparq-orange">Values</span>
            </h2>
          </motion.div>

          {/* Values Grid - Pyramid Layout */}
          <div className="max-w-3xl mx-auto">
            {/* First Row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
              {brandValues.slice(0, 3).map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg p-9 text-center"
                  style={{
                    background: "linear-gradient(180deg, #181818 0%, #191919 100%)",
                    boxShadow: "0px 4px 4px 0px #00000040",
                  }}
                >
                  <Image
                    src="/images/icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mx-auto mb-2"
                  />
                  <h3 className="font-sans text-xl font-bold text-sparq-white mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sparq-white text-md font-normal">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-xl mx-auto">
              {brandValues.slice(3, 5).map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  className="rounded-xl p-9 text-center"
                  style={{
                    background: "linear-gradient(180deg, #181818 0%, #191919 100%)",
                    boxShadow: "0px 4px 4px 0px #00000040",
                  }}

                >
                  <Image
                    src="/images/icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mx-auto mb-2"
                  />
                  <h3 className="font-sans text-xl font-bold text-sparq-white mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sparq-white text-md">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-30 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/office-image.png"
            alt=""
            fill
            className="object-cover"
            quality={70}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-sparq-white/40" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center bg-sparq-dark/90 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h2 className="font-sans text-xl md:text-5xl font-semibold text-sparq-white mt-4 mb-3">
              Ready to Make your Brand
            </h2>
            <h3 className="font-sans text-xl md:text-5xl font-semibold text-sparq-orange mb-6">
              Unforgettable?
            </h3>
            <Button href="/contact" variant="gradient" size="lg">
              Book a Consultation
            </Button>
            {/* Decorative squiggle */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute right-76 bottom-5"
            >
              <Image
                src="/images/vectors/vector11.png"
                alt=""
                width={150}
                height={150}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
