import Image from "next/image";
import aboutImg from "@/public/image/aboutImg.svg";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            About us
          </span>
          <h2 className="text-3xl font-bold text-text mt-4">
            Trusted Business Consultants Delivering Impact
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            At Kerberos Consulting, we specialize in strategy, technology,
            digital transformation, and operations. Our expert team helps
            businesses tackle challenges and achieve sustainable growth across
            various industries.
          </p>
          <button className="mt-6 bg-primary hover:bg-primary-hover focus:bg-primary-focus text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Learn More About Us
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={aboutImg}
            alt="Business Consultants Working"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
