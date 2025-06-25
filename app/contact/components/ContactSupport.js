"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";
import Image from "next/image";

const ContactSupport = () => {
  return (
    <motion.div
      className=" flex items-center justify-center bg-gray-100 p-6 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="container w-full bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/image/contactIllustration.png"
            alt="Get in touch illustration"
            width={600}
            height={600}
            className="w-full h-auto rounded-lg object-cover "
          />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Contact &amp; Support
          </h2>
          <p className="text-gray-600">
            We&apos;re here to assist you. Whether it&apos;s inquiries,
            consultations, or support, don&apos;t hesitate to reach out.
          </p>

          {[
            {
              icon: FaComments,
              title: "Chat to Support",
              description: "Chat to our staff 24/7 for instant support",
              link: "#",
              linkText: "Start Live Chat",
            },
            {
              icon: FaPhone,
              title: "Call Us",
              description: "Monday – Friday, 9:00 AM – 6:00 PM",
              contact: "",
            },
            {
              icon: FaEnvelope,
              title: "Email Support",
              description: "Email us & we will get back to you within 24 hours",
              link: "mailto:support@apexadvisory.com",
              linkText: "support@apexadvisory.com",
            },
            {
              icon: FaMapMarkerAlt,
              title: "Abuja, Nigeria",
              description:
                "Visit our office Monday – Friday, 9:00 AM – 5:00 PM",
              contact:
                "4 Pakali Close, Off Aminu Kano Crescent, Wuse 2, Abuja, Nigeria",
              link: "#",
            },
          ].map((info, index) => (
            <motion.div
              key={info.title}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
            >
              <info.icon className="text-primary text-xl mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {info.title}
                </h3>
                <p>{info.description}</p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary font-semibold hover:text-primary-hover"
                  >
                    {info.linkText || info.contact}
                  </a>
                ) : (
                  <p className="font-semibold text-primary">{info.contact}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSupport;
