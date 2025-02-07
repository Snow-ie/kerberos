const BusinessHistory = () => {
  return (
    <section className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px] bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/image/aboutBusiness.svg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20 px-6 text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Our Business Journey
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
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
