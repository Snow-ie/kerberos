import { FaLightbulb, FaTools, FaChartLine } from "react-icons/fa"; // Import vector icons
import Consulting from "../app/image/Consulting.svg";
import Tech from "../app/image/Tech.svg";
import Energy from "../app/image/Energy.svg";
const slides = [
  {
    title: "KERBEROS CONSULTING",
    description:
      "Our mission is to help individuals and organizations transform by leveraging data-driven insights and world-class transformational leaders, under innovation and excellence.",
    image: Consulting,
    icon: <FaChartLine className="text-blue-500 text-6xl animate-pulse" />,
  },
  {
    title: "KERBEROS ENERGY SERVICES LIMITED",
    description:
      "To be the preferred partner for oil and gas companies seeking innovative solutions and unparalleled service to drive high-value energy operations.",
    image: Energy,
    icon: <FaTools className="text-green-500 text-6xl animate-spin" />,
  },
  {
    title: "KERBEROS TECHNOLOGY",
    description:
      "Our mission is to be the catalyst for global transformation by developing and delivering world-leading innovative industries, foster innovation, and drive sustainable progress.",
    image: Tech,
    icon: <FaLightbulb className="text-yellow-500 text-6xl animate-bounce" />,
  },
];

export default slides;
