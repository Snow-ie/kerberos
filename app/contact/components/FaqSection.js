"use client";

import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import faqs from "@/data/faqs";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
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
            className="border h-fit border-gray-200 rounded-lg shadow-sm  flex flex-col justify-between w-full "
          >
            <button
              className="flex justify-between items-center w-full p-5 text-gray-900 font-medium hover:bg-gray-100 transition-all"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="text-lg">{faq.question}</span>
              {openIndex === index ? (
                <ChevronDown className="w-5 h-5 text-primary transition-transform transform rotate-180" />
              ) : (
                <Plus className="w-5 h-5 text-primary" />
              )}
            </button>
            <div
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-300 p-5`}
            >
              {openIndex === index && (
                <p className="text-gray-700">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
