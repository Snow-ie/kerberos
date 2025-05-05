"use client";

import { motion } from "framer-motion";
import {
  FaOilCan,
  FaIndustry,
  FaTools,
  FaGasPump,
  FaBolt,
} from "react-icons/fa";

const energyServices = [
  {
    title: "Oil & Gas Consulting",
    description:
      "Providing expert consulting services in the oil & gas sector, optimizing operations for efficiency and sustainability.",
    bgColor: "bg-gray-50 text-gray-800 border border-gray-200",
    icon: FaOilCan,
  },
  {
    title: "Industrial Solutions",
    description:
      "Delivering tailored solutions for industrial energy management, enhancing productivity and cost-effectiveness.",
    bgColor: "bg-white text-gray-900 border border-gray-300",
    icon: FaIndustry,
  },
  {
    title: "Technical Support",
    description:
      "Our experts provide on-site and remote technical support to ensure smooth energy operations and maintenance.",
    bgColor: "bg-gray-50 text-gray-800 border border-gray-200",
    icon: FaTools,
  },
  {
    title: "Renewable Energy",
    description:
      "Harnessing solar, wind, and other renewable energy sources to drive sustainability and efficiency.",
    bgColor: "bg-white text-gray-900 border border-gray-300",
    icon: FaBolt,
  },
  {
    title: "Fuel Distribution",
    description:
      "Optimizing fuel supply chains for businesses and industries, ensuring reliable and cost-effective distribution.",
    bgColor: "bg-gray-50 text-gray-800 border border-gray-200",
    icon: FaGasPump,
  },
];

const iconVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  hover: { scale: 1.2, rotate: 10 },
};

const EnergyServices = () => {
  return (
    <section className="py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Energy Services
      </motion.h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {energyServices.map((service, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-xl shadow-lg text-center ${service.bgColor}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.h3
              className="text-lg font-bold text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              {service.title}
            </motion.h3>

            <motion.p
              className="text-gray-600 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.4, duration: 0.6 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="flex justify-center mt-4"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <service.icon className="text-5xl text-gray-700" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EnergyServices;
