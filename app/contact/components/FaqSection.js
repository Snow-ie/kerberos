"use client";

import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import faqs from "@/data/faqs";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Answers to common inquiries about our services.
      </p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              className="flex justify-between items-center w-full p-5 text-gray-900 font-medium hover:bg-gray-100 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg">{faq.question}</span>
              {openIndex === index ? (
                <ChevronDown className="w-5 h-5 text-green-600" />
              ) : (
                <Plus className="w-5 h-5 text-green-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-5 text-gray-700 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
