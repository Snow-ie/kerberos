export default function IntroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-12 py-20">
      <div className="md:w-1/2 max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Driving <span className="text-secondary">Innovative</span>{" "}
          <span className="text-secondary">Solutions</span> with{" "}
          <span className="text-secondary">Lasting Impact</span>
        </h1>
      </div>

      <div className="hidden md:block h-24 border-l-2 border-secondary mx-8"></div>

      <div className="md:w-1/2 mt-4 text-gray-600 text-justify">
        <p>
          At Kerberos Group, we are committed to driving innovation, efficiency,
          and sustainable growth across diverse industries. With expertise
          spanning consulting, technology, and energy services, we provide
          cutting-edge solutions that empower businesses, governments, and
          industries to navigate complex challenges and unlock new
          opportunities.
        </p>
      </div>
    </section>
  );
}
