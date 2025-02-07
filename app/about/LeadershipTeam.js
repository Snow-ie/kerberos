import Image from "next/image";

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-text">
          Meet Our Leadership Team
        </h2>
        <p className="text-text-hover mt-2">
          Led by seasoned experts, our leadership delivers innovative, tailored
          solutions that empower businesses to thrive and grow sustainably.
        </p>
      </div>

      {/* Leadership Team Members */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
        {/* Leader 1 */}
        <div className="flex flex-col items-center">
          <div className="w-[200px] h-[260px] bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src=""
              alt="Leadership Member 1"
              width={200}
              height={260}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-text">
            Kizito Ofornagoro
          </h3>
          <p className="text-sm text-text-hover italic">
            CEO, Kerberos Consulting Ltd
          </p>
        </div>

        {/* Leader 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[200px] h-[260px] bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src=""
              alt="Leadership Member 2"
              width={200}
              height={260}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-text">
            Haruna Madisca
          </h3>
          <p className="text-sm text-text-hover italic">
            MD, Kerberos Consulting Ltd
          </p>
        </div>
      </div>

      {/* Meet Our Team Button */}
      <div className="mt-8">
        <a
          href="#"
          className="border border-green-700 text-green-700 px-6 py-2 rounded-md font-medium hover:bg-green-100 transition"
        >
          Meet Our Team
        </a>
      </div>
    </section>
  );
};

export default LeadershipTeam;
