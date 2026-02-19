"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/sparqcreations",
    icon: InstagramIcon
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/sparqcreations",
    icon: LinkedInIcon
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#181818] relative overflow-hidden">
      {/* Decorative Circle */}
      <div
        className="absolute top-28 left-1/2 w-[300px] h-[300px] opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F3851F 0%, rgba(243, 133, 31, 0) 70%)',
          transform: 'translate(-50%, -20%)',
          zIndex: 0,
          filter: 'blur(80px)',
        }}
      />

      {/* CTA Section */}
      <section className="pt-16 mt-10 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mx-auto"
          >
            <h2 className="font-sans font-bold text-[#F2F2F0] mb-10 text-center" style={{ fontSize: '52px', fontWeight: 700, lineHeight: '100%', letterSpacing: '0%' }}>
              Let&apos;s Help you Build a Brand That <br />
              Sparks Loyalty and Unlock Growth.
            </h2>
            <p className="text-[#F2F2F0] font-normal text-lg -mb-2">
              Every conversation starts with clarity. Book a free discovery session{" "}
              <span className="text-[#F3851F] font-semibold">TODAY</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <div>
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-medium text-lg">
            <a
              href="https://maps.google.com/?q=73+Allen+Avenue+Lagos+NG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] text-[#F2F2F0] transition-colors"
            >
              <LocationIcon />
              <span>73 Allen Avenue, Lagos, NG</span>
            </a>
            <a
              href="tel:+2348129423447"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] text-[#F2F2F0] transition-colors"
            >
              <PhoneIcon />
              <span>+2348129423447</span>
            </a>
            <a
              href="mailto:info@sparqcreations.org"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] text-[#F2F2F0] transition-colors"
            >
              <EmailIcon />
              <span>info@sparqcreations.org</span>
            </a>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#181818] text-[#F2F2F0] transition-colors group"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6 text-[#F2F2F0]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="py-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 lg:px-12"
        >
          <h3
            className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold"
            style={{
              fontFamily: 'var(--font-hanken-grotesk), sans-serif',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #F88A21 0%, #D76B10 50%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.5
            }}
          >
            SPARQ CREATIONS
          </h3>
          <p className="text-center text-[#8D8B88] text-sm mt-4 italic">
            Creating Authentic Connection...........
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C4.69 0 2 2.69 2 6c0 4.5 6 10 6 10s6-5.5 6-10c0-3.31-2.69-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S6.62 3.5 8 3.5s2.5 1.12 2.5 2.5S9.38 8.5 8 8.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M13.6 16c-.3 0-.5 0-.8-.1C5.7 14.4 1.6 10.3.1 3.2c-.2-.8.1-1.7.7-2.3S2.3 0 3.1.1l1.7.4c.6.1 1.1.6 1.2 1.2l.7 2.4c.1.5 0 1.1-.4 1.5l-1 1.2c.7 1.4 1.7 2.7 3 3.9 1.2 1.2 2.5 2.2 3.9 3l1.2-1c.4-.4 1-.5 1.5-.4l2.4.7c.6.2 1.1.6 1.2 1.2l.4 1.7c.1.8-.1 1.6-.8 2.2-.5.6-1.2.9-2 .9z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M14 2H2C.9 2 0 2.9 0 4v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4l-6 3.5L2 6V4l6 3.5L14 4v2z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}


function LinkedInIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/linkedin.png"
        alt="LinkedIn"
        fill
        className="object-contain"
      />
    </div>
  );
}
