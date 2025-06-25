import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  // { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaXTwitter, label: "X", href: "https://x.com/YourHandle" },
  // { icon: FaInstagram, label: "Instagram", href: "#" },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "http://www.linkedin.com/company/kerberos-consulting-ltd",
  },
  // { icon: FaYoutube, label: "YouTube", href: "#" },
];
export default socials;
