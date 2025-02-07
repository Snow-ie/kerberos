import expertiseData from "@/data/expertiseData";

const Expertise = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Expertise
        </h2>
        <p className="text-gray-600 mt-2 text-lg leading-relaxed">
          Explore how we help businesses across various industries achieve
          growth, optimize operations, and navigate challenges with our expert
          consulting services.
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2  gap-6 max-w-6xl mx-auto px-6">
        {/* Diamond Connector in the Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-4 h-4 bg-primary-focus rotate-45"></div>
        </div>

        {/* Expertise Cards */}
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg border border-gray-300 shadow-sm transition-transform transform hover:scale-105 text-center"
          >
            <div className="text-green-600 text-4xl">{item.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
            <a
              href="#"
              className="mt-4 text-green-600 font-medium hover:underline"
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
