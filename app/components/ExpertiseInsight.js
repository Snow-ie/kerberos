import insightsData from "@/data/insightsData";
import Image from "next/image";

const ExpertInsights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Expert Insights
            </h2>
            <p className="text-gray-600 mt-2 text-lg leading-relaxed">
              Stay informed with the latest trends, strategies, and expert
              perspectives in consulting and business growth.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 border border-green-700 text-green-700 px-5 py-2 rounded-lg font-medium hover:bg-green-100 transition"
          >
            View All
          </a>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {insightsData.map((insight) => (
            <div
              key={insight.id}
              className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-56">
                <Image
                  src={insight.imageUrl}
                  alt={insight.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {insight.description}
                </p>
                <a
                  href={insight.link}
                  className="text-green-700 font-medium hover:underline mt-3 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertInsights;
