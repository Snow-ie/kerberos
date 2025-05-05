import {
  FaLightbulb,
  FaHandshake,
  FaLeaf,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const coreValues = [
  {
    title: "Excellence",
    icon: <FaStar size={40} />,
    description:
      "We strive for excellence in all operations, delivering superior services that exceed client expectations.",
  },
  {
    title: "Innovation",
    icon: <FaLightbulb size={40} />,
    description:
      "We embrace innovation and continuously seek creative solutions to address industry challenges.",
  },
  {
    title: "Integrity",
    icon: <FaHandshake size={40} />,
    description:
      "We conduct our business with honesty, transparency, and ethical integrity, fostering long-term relationships.",
  },
  {
    title: "Collaboration",
    icon: <FaUsers size={40} />,
    description:
      "We value teamwork, leveraging diverse expertise to deliver integrated solutions that drive success.",
  },
  {
    title: "Sustainability",
    icon: <FaLeaf size={40} />,
    description:
      "We are committed to environmental sustainability, minimizing our ecological footprint for a greener future.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-secondary mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold">{value.title}</h3>
            <p className="text-gray-600 text-center mt-2">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
