"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input, Textarea } from "@/components/ui";
import { Button } from "@/components/ui";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Formspree endpoint - replace with your actual endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="relative min-h-screen pt-28 pb-12 bg-sparq-cream overflow-hidden">
        {/* Decorative elements */}
        
        {/* Swirl/Loop decoration - top left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.2 }}
          className="absolute top-32 left-8 md:left-16 w-16 h-20"
        >
          <Image
            src="/images/vectors/vector1.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Paper plane - left side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-1/3 left-8 md:left-20"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
              d="M5 30L55 5L40 55L30 35L5 30Z"
              stroke="#E87A20"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
            />
            <path d="M30 35L55 5" stroke="#E87A20" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Curvy arrow - bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-32 left-12 md:left-24 w-20 h-16"
        >
          <Image
            src="/images/vectors/vector11.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Sparkles - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-28 right-12 md:right-24"
        >
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
            <path d="M30 0L32 12L40 15L32 18L30 30L28 18L20 15L28 12L30 0Z" fill="#E87A20" opacity="0.8"/>
            <path d="M50 20L51 26L55 28L51 30L50 36L49 30L45 28L49 26L50 20Z" fill="#E87A20" opacity="0.6"/>
            <path d="M45 50L46 54L49 55L46 56L45 60L44 56L41 55L44 54L45 50Z" fill="#E87A20" opacity="0.4"/>
          </svg>
        </motion.div>

        {/* Small sparkle - right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 right-16 md:right-28"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#E87A20" opacity="0.5">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>

        {/* Squiggle - bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-40 right-12 md:right-20"
        >
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path
              d="M5 20 Q15 5 25 20 Q35 35 45 20 Q55 5 55 20"
              stroke="#E87A20"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-sparq-orange/20 rounded-full text-sparq-orange text-sm font-medium mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="8" r="3" />
                </svg>
                Contact Us
              </span>
              <p className="text-sparq-gray-dark text-sm md:text-base">
                Every great brand begins with clarity. Start with a strategy session, and let&apos;s
                uncover how your business can stand out, connect, and scale.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="font-sans text-2xl font-bold text-sparq-dark mb-2">
                  Message Sent!
                </h2>
                <p className="text-sparq-gray-dark mb-6">
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
                <Button
                  variant="primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <Input
                  name="name"
                  placeholder="Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-white/80"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-white/80"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={handleChange}
                    className="bg-white/80"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Enter Your Message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="bg-white/80"
                />

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
