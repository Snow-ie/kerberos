"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-12 py-20">
      <motion.div
        className="md:w-1/2 max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Driving <span className="text-secondary">Innovative</span>{" "}
          <span className="text-secondary">Solutions</span> with{" "}
          <span className="text-secondary">Lasting Impact</span>
        </h1>
      </motion.div>

      <motion.div
        className="hidden md:block h-24 border-l-2 border-secondary mx-8"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="md:w-1/2 mt-4 text-gray-600 text-justify"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p>
          At Kerberos Group, we are committed to driving innovation, efficiency,
          and sustainable growth across diverse industries. With expertise
          spanning consulting, technology, and energy services, we provide
          cutting-edge solutions that empower businesses, governments, and
          industries to navigate complex challenges and unlock new
          opportunities.
        </p>
      </motion.div>
    </section>
  );
}
