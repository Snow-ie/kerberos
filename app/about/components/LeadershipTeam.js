"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import teamMembers from "@/data/teamMembers";

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Meet Our Leadership Team
        </motion.h2>

        <motion.p
          className="text-text-hover mt-2 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Led by seasoned experts, our leadership delivers innovative, tailored
          solutions that empower businesses to thrive and grow sustainably.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="w-[180px] h-[240px] overflow-hidden rounded-md shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={member.img}
                alt={member.name}
                width={180}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-text">
              {member.name}
            </h3>
            <p className="text-sm text-text-hover italic">{member.title}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* <a
          href="#"
          className="border border-green-700 text-green-700 px-6 py-2 rounded-md font-medium 
            hover:bg-green-100 transition-all hover:shadow-md"
        >
          Meet Our Team
        </a> */}
      </motion.div>
    </section>
  );
};

export default LeadershipTeam;
