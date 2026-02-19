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
      <section
        className="relative min-h-screen pt-28 pb-12 overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #D1B686 25%, #F4ECBA 50%)",
        }}
      >
        {/* Decorative elements */}

        {/* Swirl/Loop decoration - top left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.2 }}
          className="absolute top-50 left-8 md:left-25 w-40 h-40"
        >
          <Image
            src="/images/vectors/vector2.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Curvy arrow - bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-70 left-12 md:left-40 w-20 h-16"
        >
          <Image
            src="/images/vectors/vector9.svg"
            alt=""
            fill
            className="object-contain rotate-50"

          />
        </motion.div>

        {/* Curvy arrow - bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-9 left-12 md:left-30 w-30 h-30"
        >
          <Image
            src="/images/vectors/vector8.svg"
            alt=""
            fill
            className="object-contain rotate-50"

          />
        </motion.div>

        {/* Sparkles - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-40 right-12 md:right-24 w-30 h-30"
        >
          <Image
            src="/images/vectors/vector4.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Small sparkle - right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 right-16 md:right-28 w-20 h-20"
        >
          <Image
            src="/images/vectors/vector10.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Squiggle - bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-5 right-12 md:right-40 w-30 h-30"
        >
          <Image
            src="/images/vectors/vector8.svg"
            alt=""
            fill
            className="object-contain rotate-200"
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 mt-20"
            >
              <span className="inline-flex items-center gap-2 px-8 py-2 bg-[#F2F2F099] border-1 border-sparq-orange/60 rounded-full text-sparq-orange text-xl font-medium mb-10">
                <Image
                  src="/images/icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                Contact Us
              </span>
              <p className="font-noto-sans text-[#101010] text-sm md:text-xl font-normal">
                Every great brand begins with clarity. Start with a strategy session, <br />
                and let&apos;s uncover how your business can stand out, connect, and scale.
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
