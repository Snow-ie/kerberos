"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 pt-20">
      <div className="max-w-6xl w-full bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Get in Touch with Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name *</label>
              <input
                type="text"
                placeholder="Your name"
                {...register("name")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Email *</label>
              <input
                type="email"
                placeholder="example@company.com"
                {...register("email")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Phone Number *</label>
              <input
                type="tel"
                placeholder="+11 000 000 000"
                {...register("phone")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Message *</label>
              <textarea
                placeholder="Leave us a Message"
                {...register("message")}
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring focus:ring-green-200"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Contact & Support
          </h2>
          <p className="text-gray-600">
            We're here to assist you. Whether it's inquiries, consultations, or
            support, don't hesitate to reach out.
          </p>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Chat to Support
            </h3>
            <p>Chat to our staff 24/7 for instant support</p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:text-green-800"
            >
              Start Live Chat
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Call Us</h3>
            <p>Monday - Friday, 9:00 AM - 6:00 PM</p>
            <p className="font-semibold text-green-600">+44 161 987 6543</p>
            <p className="font-semibold text-green-600">+44 161 987 6543</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Email Support
            </h3>
            <p>Email us & we will get back to you within 24 hours</p>
            <a
              href="mailto:support@apexadvisory.com"
              className="text-green-600 font-semibold hover:text-green-800"
            >
              support@apexadvisory.com
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Abuja, Nigeria
            </h3>
            <p>Visit our office Monday - Friday, 9:00 AM - 5:00 PM</p>
            <p className="font-semibold text-green-600">
              <a href="#">
                4 Pakali Close, Off Aminu Kano Crescent, Wuse 2, Abuja, Nigeria
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
