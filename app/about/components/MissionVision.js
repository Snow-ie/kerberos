"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-secondary">Our Mission</h2>
          <div className="flex items-start mt-4">
            <div className="w-1 h-full bg-secondary mr-6"></div>
            <p className="text-text-hover leading-relaxed">
              At Kerberos, we empower global progress through visionary
              infrastructure and technology solutions. Our mission is to
              facilitate transformative projects that advance industries and
              enhance communities.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full h-auto"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/image/missionImg.svg"
            alt="Mission Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="relative w-full h-auto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/image/visionImg.svg"
            alt="Vision Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center p-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-secondary">Our Vision</h2>
          <div className="flex items-start mt-4">
            <div className="w-1 h-full bg-secondary mr-6"></div>
            <p className="text-text-hover leading-relaxed">
              To be the trusted partner for businesses and industries seeking
              strategic transformation, technological advancement, and
              sustainable energy solutions. We aim to lead with innovation,
              empower businesses with expertise, and champion solutions that
              create a lasting impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
