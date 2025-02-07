import values from "@/data/values";

const ValuesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Grid Layout for Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="text-green-600 text-4xl">{value.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {value.title}
              </h3>
              <p className="mt-2 text-text-focus text-sm md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
