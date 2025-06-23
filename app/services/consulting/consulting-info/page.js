"use client";

import { motion } from "framer-motion";
import ServiceHero from "../../components/ServiceHero";
import consultingServices from "@/data/consultingServices";

export default function ConsultingInfo() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <ServiceHero
        src="/image/consultingImg4.jpg"
        alt="Analytics dashboard on tablet"
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
            Kerberos Consulting.
          </h1>
          <p className="text-base font-medium text-indigo-600">
            Empowering Growth Through Strategic Insight
          </p>
        </motion.header>

        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Kerberos Consulting partners with organisations to unlock their full
          potential by aligning vision with data-driven, actionable strategies.
          Through rigorous market intelligence, performance frameworks, and
          stakeholder-focused advisory, we help clients build resilient systems
          and deliver long-term impact.
        </motion.p>

        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Our Services Include
          </h2>

          <ul className="list-disc list-inside space-y-4 text-gray-700">
            {consultingServices.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <strong>{item.title}</strong> {item.desc}
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            We’re committed to delivering tailored solutions that address your
            specific needs and generate measurable impact.
          </motion.p>
        </motion.section>
      </main>
    </div>
  );
}
