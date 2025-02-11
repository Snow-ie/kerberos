import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/HeroImage.svg"
        alt="Kerberos Energy Services"
        fill
        style={{ objectFit: "cover" }}
        className="brightness-75"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          KERBEROS ENERGY SERVICES LIMITED
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
