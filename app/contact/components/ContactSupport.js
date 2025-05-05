"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Invalid phone number format")
    .required("Phone number is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactSupport = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
    alert("Message sent successfully!");
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-6 pt-24"
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
        {/* Contact Form */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Get in Touch with Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {[
              {
                label: "Name",
                type: "text",
                name: "name",
                placeholder: "Your name",
              },
              {
                label: "Email",
                type: "email",
                name: "email",
                placeholder: "example@company.com",
              },
              {
                label: "Phone Number",
                type: "tel",
                name: "phone",
                placeholder: "+11 000 000 000",
              },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <label className="block text-gray-700">{field.label} *</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary-focus"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">
                    {errors[field.name].message}
                  </p>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="block text-gray-700">Message *</label>
              <textarea
                placeholder="Leave us a Message"
                {...register("message")}
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring focus:ring-primary-focus"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-hover transition disabled:bg-gray-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Contact & Support
          </h2>
          <p className="text-gray-600">
            We're here to assist you. Whether it's inquiries, consultations, or
            support, don't hesitate to reach out.
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
              description: "Monday - Friday, 9:00 AM - 6:00 PM",
              contact: "+44 161 987 6543",
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
                "Visit our office Monday - Friday, 9:00 AM - 5:00 PM",
              contact:
                "4 Pakali Close, Off Aminu Kano Crescent, Wuse 2, Abuja, Nigeria",
              link: "#",
            },
          ].map((info, index) => (
            <motion.div
              key={info.title}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
            >
              <info.icon className="text-primary text-xl" />
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
