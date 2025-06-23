"use client";

import { motion } from "framer-motion";
import ServiceHero from "../../components/ServiceHero";
import technologySpecialties from "@/data/technologySpecialties";

export default function TechnologyInfo() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <ServiceHero
        src="/image/techImg1.jpg"
        alt="Abstract technology background"
        ratio="21/9"
      />

      <main className="w-full container mx-auto px-4 py-12 space-y-10">
        <motion.header
          className="space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Kerberos Technologies.
          </h1>
          <p className="text-base font-medium text-indigo-600">
            Transforming Businesses Through Innovation
          </p>
        </motion.header>

        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Kerberos Technologies delivers cutting-edge digital solutions that
          enable organisations to adapt, scale, and lead in the age of
          disruption. Our deep technical expertise and agile delivery models
          support clients in cybersecurity, systems integration, and enterprise
          software development.
        </motion.p>

        <motion.section
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Our Focus Areas Include
          </h2>

          <ul className="list-disc list-inside space-y-4 text-gray-700">
            {technologySpecialties.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <strong>{item.title}</strong> {item.desc}
              </motion.li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">Our Impact</h2>
          <p className="text-gray-700">
            We’ve delivered mission-critical deployments for federal security
            agencies and state institutions—including the Nigerian Police
            Force—providing robust, scalable solutions that ensure digital
            resilience.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
