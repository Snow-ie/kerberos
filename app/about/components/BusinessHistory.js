"use client";

import { motion } from "framer-motion";

const BusinessHistory = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center bg-cover bg-center h-auto sm:h-auto md:h-[500px] lg:h-[600px] px-6"
      style={{ backgroundImage: "url('/image/aboutBusiness.svg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative z-10 text-center text-white max-w-5xl py-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Business Journey
        </motion.h2>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Founded with a vision to transform the consulting landscape, we began
          our journey in 2024 with an unwavering commitment to delivering
          strategic business solutions. Over the years, we have built a
          reputation for excellence, innovation, and industry leadership. Our
          team combines deep industry knowledge with forward-thinking strategies
          to help organizations thrive in today’s evolving markets.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BusinessHistory;
