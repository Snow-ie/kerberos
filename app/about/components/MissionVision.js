import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  px-6">
        {/* Mission Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-secondary">Our Mission</h2>
          <div className="flex items-start mt-4">
            <div className="w-1 h-full bg-secondary mr-6"></div>
            <p className="text-text-hover leading-relaxed">
              At Kerberos Consulting Ltd., we empower global progress through
              visionary infrastructure and technology solutions. Our mission is
              to facilitate transformative projects that advance industries and
              enhance communities.
            </p>
          </div>
        </div>

        {/* Mission Image - Fully Responsive */}
        <div className="relative w-full h-auto">
          <Image
            src="/image/missionImg.svg"
            alt="Mission Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Vision Image - Fully Responsive */}
        <div className="relative w-full h-auto">
          <Image
            src="/image/visionImg.svg"
            alt="Vision Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center p-6">
          <h2 className="text-2xl font-bold text-secondary">Our Vision</h2>
          <div className="flex items-start mt-4">
            <div className="w-1 h-full bg-secondary mr-6"></div>
            <p className="text-text-hover leading-relaxed">
              At Kerberos Consulting Ltd., we empower global progress through
              visionary infrastructure and technology solutions. Our mission is
              to facilitate transformative projects that advance industries and
              enhance communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
