const services = [
  {
    title: "Strategic Consulting",
    description:
      "Our experienced consultants provide strategic guidance and advisory services to help clients navigate complex challenges, capitalize on opportunities, and achieve their business objectives.",
    bgColor: "bg-secondary text-white-text",
  },
  {
    title: "Equipment Procurement",
    description:
      "We partner with industry experts to procure materials that meet international industry standards. We also specialize in asset management, monitoring, and quality assurance evaluation.",
    bgColor: "bg-white text-gray-900 border border-gray-300",
  },
  {
    title: "Project Management",
    description:
      "We offer comprehensive project management services, overseeing every aspect of project development from inception to completion, ensuring on-time delivery and cost-effective execution.",
    bgColor: "bg-secondary text-white-text",
  },
  {
    title: "Technical Support",
    description:
      "Our experts specialize in reservoir engineering, drilling optimization, production enhancement, and asset management, helping clients optimize performance and maximize recovery.",
    bgColor: "bg-white text-gray-900 border border-gray-300",
  },
  {
    title: "Training and Capacity Building",
    description:
      "We offer customized training programs and capacity-building initiatives to empower professionals with the knowledge and skills needed to excel in the dynamic oil and gas industry.",
    bgColor: "bg-secondary text-white-text",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-md ${service.bgColor}`}
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-md">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
