import Image from "next/image";
import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {string} props.src     Image path under /public  (required)
 * @param {string} props.alt     Alt text                  (required)
 * @param {string|number=} props.ratio  CSS aspect-ratio   (defaults to "16/9")
 * @param {string=} props.className     Extra Tailwind for wrapper
 */
export default function ServiceHero({
  src,
  alt,
  ratio = "16/9",
  className = "",
}) {
  return (
    <div
      className={`
        relative w-full overflow-hidden rounded
        mx-auto container      /* <-- cap width  */
        max-h-[480px] md:max-h-[560px] /* <-- cap height */
        ${ratio ? "" : "min-h-[50vh]"}
        ${className}
      `}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="object-cover   w-full h-full"
      />
    </div>
  );
}

ServiceHero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
