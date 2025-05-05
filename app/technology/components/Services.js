"use client";

import { motion } from "framer-motion";
import { FaCode, FaBuilding, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";

// Services Data
const servicesTech = [
  {
    title: "Software Engineering",
    description:
      "We develop high-quality enterprise software tailored to your needs.",
    bgColor: "bg-gray-50 text-gray-800 border border-gray-200",
    icon: FaCode,
  },
  {
    title: "Enterprise Solutions",
    description:
      "We implement scalable and secure IT systems for businesses and governments.",
    bgColor: "bg-white text-gray-900 border border-gray-300",
    icon: FaBuilding,
  },
  {
    title: "IT Consultancy",
    description:
      "Expert advisory services to help organizations integrate emerging technologies effectively.",
    bgColor: "bg-gray-50 text-gray-800 border border-gray-200",
    icon: FaLaptopCode,
  },
];

const iconVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5], // Floating effect
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  hover: { scale: 1.2, rotate: 10 },
};

const Services = () => {
  return (
    <section className="py-16 px-6">
      {/* Section Title Animation */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Grid Layout for Service Cards */}
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {servicesTech.map((service, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-xl shadow-sm text-center ${service.bgColor}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Title */}
            <motion.h3
              className="text-lg font-bold text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-600 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.4, duration: 0.6 }}
            >
              {service.description}
            </motion.p>

            {/* Animated Icon */}
            <motion.div
              className="flex justify-center mt-5"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <service.icon className="text-gray-500 text-4xl" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
