const IntroSection = () => {
  return (
    <section className="pt-24 pb-10 bg-white">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-center gap-y-6 md:gap-12 px-4 sm:px-6">
        {/* Left Section - Heading */}
        <div className="text-3xl sm:text-4xl font-bold text-text leading-tight text-center md:text-left md:w-1/2">
          Driving <span className="text-secondary">Innovative</span> Solutions
          with <span className="text-secondary">Lasting</span> Impact
        </div>

        {/* Vertical Divider (Hidden on Mobile) */}
        <div className="hidden md:block h-24 w-1 bg-secondary"></div>

        {/* Right Section - Text Content */}
        <div className="md:w-1/2 text-text-hover text-base leading-relaxed text-center md:text-left">
          <p>
            Kerberos Consulting Ltd. and Kerberos Energy Services Ltd. are
            premier consulting firms dedicated to delivering innovative and
            strategic solutions across multiple industries. Our expertise spans
            strategy consulting, technology transformation, energy services, and
            operations management, helping organizations navigate complex
            challenges and achieve sustainable growth. With a strong presence in
            business strategy, digital transformation, cybersecurity, and energy
            consulting, we are committed to fostering industry innovation and
            empowering our clients to achieve long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
