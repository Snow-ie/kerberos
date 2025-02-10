const BusinessHistory = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center bg-cover bg-center h-ayto sm:h-auto md:h-[500px] lg:h-[600px] px-6"
      style={{ backgroundImage: "url('/image/aboutBusiness.svg')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white-text max-w-2xl py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Our Business Journey
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Founded with a vision to transform the consulting landscape, we began
          our journey in 2024 with an unwavering commitment to delivering
          strategic business solutions. Over the years, we have built a
          reputation for excellence, innovation, and industry leadership. Our
          team combines deep industry knowledge with forward-thinking strategies
          to help organizations thrive in today’s evolving markets.
        </p>
      </div>
    </section>
  );
};

export default BusinessHistory;
