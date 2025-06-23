"use client";

import { motion } from "framer-motion";
import ServiceHero from "../../components/ServiceHero";
import specialties from "@/data/specialties";

export default function EnergyInfo() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <ServiceHero
        src="/image/energyImg4.jpg"
        alt="Energy landscape"
        ratio="16/9"
        sizes="(min-width: 1024px) 768px, 100vw"
      />

      <main className="w-full container mx-auto px-4 py-12 space-y-10">
        <motion.header
          className="space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Kerberos Energy Services.
          </h1>
          <p className="text-base font-medium text-indigo-600">
            Driving Sustainability &amp; Innovation in Energy
          </p>
        </motion.header>

        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Kerberos Energy Services delivers strategic advisory, technical
          solutions, and operational consulting for energy, oil &amp; gas, and
          renewables sectors. We help clients transition to sustainable energy
          models, optimize legacy systems, and uncover investment opportunities
          in Africa’s energy landscape.
        </motion.p>

        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Our Specialties Include
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            {specialties.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <strong dangerouslySetInnerHTML={{ __html: item.title }} />{" "}
                {item.desc}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-xl font-semibold text-gray-900">Our Impact</h2>
          <p className="text-gray-700">
            Kerberos Energy Services provides the expert guidance and innovative
            solutions required to thrive in the evolving energy sector.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
