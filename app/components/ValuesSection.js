import values from "@/data/values";

const ValuesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              {value.icon}
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {value.title}
              </h3>
              <p className="mt-2 text-text-focus">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
