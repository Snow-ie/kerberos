import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div className="text-center md:text-left">
          <span className="bg-primary text-white-text px-4 py-1 rounded-full text-sm font-semibold">
            About us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-4 leading-snug">
            Trusted Business Consultants Delivering Impact
          </h2>
          <p className="text-text mt-4 leading-relaxed">
            At Kerberos Consulting, we specialize in strategy, technology,
            digital transformation, and operations. Our expert team helps
            businesses tackle challenges and achieve sustainable growth across
            various industries.
          </p>

          <Link href="/about" passHref>
            <button className="mt-6 bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-primary-focus text-white-text font-semibold py-3 px-6 rounded-lg transition duration-300">
              Learn More About Us
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/image/aboutImg.svg"
            alt="Business Consultants Working"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full max-w-sm md:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
