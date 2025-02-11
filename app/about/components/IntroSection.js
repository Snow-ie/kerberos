export default function IntroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-12 py-10">
      {/* Left Side: Heading */}
      <div className="md:w-1/2 max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Driving <span className="text-secondary">Innovative</span>{" "}
          <span className="text-secondary">Solutions</span> with{" "}
          <span className="text-secondary">Lasting Impact</span>
        </h1>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-24 border-l-2 border-secondary mx-8"></div>

      {/* Right Side: Description */}
      <div className="md:w-1/2 mt-4 text-gray-600">
        <p>
          Kerberos Consulting Ltd. and Kerberos Energy Services Ltd. are premier
          consulting firms dedicated to delivering innovative and strategic
          solutions across multiple industries. Our expertise spans strategy
          consulting, technology transformation, energy services, and operations
          management, helping organizations navigate complex challenges and
          achieve sustainable growth. With a strong presence in business
          strategy, digital transformation, cybersecurity, and energy
          consulting, we are committed to fostering industry innovation and
          empowering our clients to achieve long-term success.
        </p>
      </div>
    </section>
  );
}
