const BusinessHistory = () => {
  return (
    <section className="relative min-h-[400px] md:min-h-[450px] lg:min-h-[600px] bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/image/aboutBusiness.svg')] bg-cover bg-center bg-no-repeat opacity-80">
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative max-w-4xl mx-auto text-center py-20 px-6 text-white">
        <h2 className="text-3xl font-bold">Our Businesses Since</h2>
        <p className="mt-4 leading-relaxed">
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
