import Link from "next/link";

export default function NextButton({ href }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded bg-secondary px-6 py-2
                 text-white text-sm font-medium shadow hover:bg-secondary-hover
                 transition"
    >
      Back
    </Link>
  );
}
