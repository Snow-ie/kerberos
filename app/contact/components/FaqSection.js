"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import faqs from "@/data/faqs";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.section
      className="container mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center text-gray-900"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Answers to common inquiries about our services.
      </motion.p>

      {/* FAQ Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border h-fit border-gray-200 rounded-lg shadow-sm flex flex-col justify-between w-full"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <button
              className="flex justify-between items-center w-full p-5 text-gray-900 font-medium hover:bg-gray-100 transition-all"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="text-lg">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <ChevronDown className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-primary" />
                )}
              </motion.div>
            </button>

            {/* Expanding Answer with Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-content-${index}`}
                  className="overflow-hidden p-5 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQSection;
