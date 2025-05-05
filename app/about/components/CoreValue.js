import React from "react";
import Link from "next/link";

const CoreServices = () => {
  return (
    <div className="w-4/5 mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-secondary">
        Our Core Service Areas
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <Link href="/services/consulting" passHref>
          <div className="bg-white p-6  text-center transform transition duration-300 hover:-translate-y-2 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="Consulting Icon"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-secondary">
              Consulting Services
            </h3>
            <p className="text-text mt-2">
              Providing strategic insights, operational improvements, and market
              expansion solutions.
            </p>
          </div>
        </Link>
        <Link href="/services/technology" passHref>
          <div className="bg-white p-6 text-center transform transition duration-300 hover:-translate-y-2 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/956/956964.png"
              alt="Technology Icon"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-secondary">
              Technology & Digital Solutions
            </h3>
            <p className="text-gray-600 mt-2">
              Leading in IT strategy, AI, automation, cloud solutions, and data
              analytics.
            </p>
          </div>
        </Link>
        <Link href="/services/energy" passHref>
          <div className="bg-white p-6  text-center transform transition duration-300 hover:-translate-y-2 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5460/5460704.png"
              alt="Energy Icon"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-secondary">
              Energy Consulting & Infrastructure
            </h3>
            <p className="text-gray-600 mt-2">
              Expertise in oil, gas, renewable energy, and sustainable
              infrastructure solutions.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CoreServices;
