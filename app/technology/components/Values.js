import {
  FaLightbulb,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const values = [
  {
    title: "Innovation",
    icon: <FaLightbulb size={40} />,
    description: "We encourage creativity for groundbreaking solutions.",
  },
  {
    title: "Integrity",
    description:
      "Honesty, transparency, and ethical behavior guide everything we do.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: "Excellence",
    description:
      "We set high standards in product development and customer service.",
    icon: <FaStar size={40} />,
  },
  {
    title: "Team Collaboration",
    description: "We believe in teamwork and a supportive work environment.",
    icon: <FaUsers size={40} />,
  },
  {
    title: "Customer Focus",
    description:
      "We provide high-value products and services exceeding client expectations.",
    icon: <FaHandshake size={40} />,
  },
];

const Values = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            <div className="mb-4 text-secondary">{value.icon}</div>
            <h3 className="text-xl font-semibold">{value.title}</h3>
            <p className="text-gray-600 mt-2">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
