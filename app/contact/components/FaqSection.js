"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import faqs from "@/data/faqs";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <motion.section
      className="container mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-900"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2"
          variants={{
            hidden: { opacity: 0, y: -5 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Answers to common inquiries about our services.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            variants={itemVariants}
          >
            <button
              className="w-full flex justify-between items-center p-5 text-gray-900 font-medium hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-${idx}`}
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === idx ? (
                  <ChevronDown className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-primary" />
                )}
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  id={`faq-${idx}`}
                  className="p-5 text-gray-700"
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
