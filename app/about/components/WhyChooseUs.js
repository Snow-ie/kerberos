"use client";

import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import points from "@/data/point";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 rounded-lg shadow-sm">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-secondary">Why Choose Us</h2>
          <p className="text-text mt-2">
            Partner with a consulting firm that delivers innovative,
            client-focused strategies to drive growth and transformation.
          </p>

          <div className="mt-6 w-full h-[250px] md:h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src="/image/whyUS.svg"
              alt="Business Growth"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {points.map((text, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 bg-purple-50 border-l-4 border-secondary p-4 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <FaLightbulb className="text-secondary text-2xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
