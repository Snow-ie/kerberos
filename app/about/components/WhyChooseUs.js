import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 border border-gray-300 rounded-lg p-6 shadow-sm">
        {/* Left Section - Title, Text, and Image */}
        <div>
          <h2 className="text-3xl font-bold text-secondary">Why Choose Us</h2>
          <p className="text-text mt-2">
            Partner with a consulting firm that delivers innovative,
            client-focused strategies to drive growth and transformation.
          </p>
          <div className="mt-6 w-full h-[250px] md:h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src="/image/whyUs.svg"
              alt="Business Growth"
              width={500}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Right Section - List of Benefits */}
        <div className="space-y-6">
          {[
            "Industry Expertise – Backed by years of experience, we bring deep market insights and data-driven solutions.",
            "Client-Centric Approach – We tailor every service to match our clients' unique needs, ensuring measurable impact.",
            "Innovative Strategies – We leverage the latest technologies to drive business growth and transformation.",
            "Sustainable Solutions – We prioritize environmentally responsible practices to support long-term sustainability.",
            "Strategic Partnerships – Our extensive network allows us to connect clients with key industry players and opportunities.",
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-purple-50 border-l-4 border-secondary p-4 rounded-md"
            >
              <FaLightbulb className="text-secondary text-2xl flex-shrink-0" />
              <span className="text-gray-700">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
