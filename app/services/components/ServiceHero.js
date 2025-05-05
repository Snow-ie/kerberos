import Image from "next/image";

/**
 * @param {object}   props
 * @param {string}   props.src    image path in /public  (required)
 * @param {string}   props.alt    alt text               (required)
 * @param {string=}  props.ratio  any CSS aspect‑ratio   (e.g. "16/9"). Omit for natural height or parent‑defined sizing
 */
export default function ServiceHero({ src, alt, ratio = "16/9" }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded
                  ${
                    ratio ? "" : "min-h-[50vh] sm:min-h-[30vh] lg:min-h-[65vh]"
                  }`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover w-full h-full"
        sizes="100vw"
      />
    </div>
  );
}
