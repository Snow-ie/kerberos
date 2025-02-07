import Link from "next/link";

export default function BusinessCTA() {
  return (
    <div
      className="relative w-full flex items-center justify-center bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] px-6"
      style={{ backgroundImage: "url('/image/businessCt.svg')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white-text max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl">
          Partner with us for expert guidance and strategies that drive growth
          and success.
        </p>
        <Link href="/contact" passHref>
          <button className="mt-5 px-6 py-3 md:px-8 md:py-4 border border-white text-white-text rounded-md sm:rounded-lg text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
