import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <span className="bg-primary text-white-text px-4 py-1 rounded-full text-sm font-semibold">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-4 leading-snug">
            Driving Innovation in Energy & Technology
          </h2>
          <p className="text-text mt-4 leading-relaxed">
            At Kerberos, we specialize in cutting-edge solutions for the
            consulting, energy and technology sectors. From sustainable energy
            strategies to advanced IT infrastructure, we empower businesses with
            innovative solutions that drive growth, efficiency, and
            sustainability.
          </p>

          <Link href="/about" passHref>
            <button className="mt-6 bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-primary-focus text-white-text font-semibold py-3 px-6 rounded-lg transition duration-300">
              Learn More About Us
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src="/image/AboutImg.jpeg"
            alt="Energy and Technology Solutions"
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
