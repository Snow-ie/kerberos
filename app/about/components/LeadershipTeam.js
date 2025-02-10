import Image from "next/image";

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-text">
          Meet Our Leadership Team
        </h2>
        <p className="text-text-hover mt-2 leading-relaxed max-w-2xl mx-auto">
          Led by seasoned experts, our leadership delivers innovative, tailored
          solutions that empower businesses to thrive and grow sustainably.
        </p>
      </div>

      {/* Leadership Team Members */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-full mx-auto justify-center">
        {/* Leader 1 */}
        <div className="flex flex-col items-center">
          <div className="w-[180px] h-[240px] bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all">
            <Image
              src="/image/leaderShip2.svg"
              alt="Leadership Member 1"
              width={180}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-text">
            Kizito Ofornagoro
          </h3>
          <p className="text-sm text-text-hover italic">
            CEO, Kerberos Consulting Ltd
          </p>
        </div>

        {/* Leader 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[180px] h-[240px] bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all">
            <Image
              src="/image/leaderShip1.svg"
              alt="Leadership Member 2"
              width={180}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-text">
            Haruna Madisca
          </h3>
          <p className="text-sm text-text-hover italic">
            MD, Kerberos Consulting Ltd
          </p>
        </div>
      </div>

      {/* Meet Our Team Button */}
      <div className="mt-8 flex justify-center">
        <a
          href="#"
          className="border border-green-700 text-green-700 px-6 py-2 rounded-md font-medium 
          hover:bg-green-100 transition-all hover:shadow-md"
        >
          Meet Our Team
        </a>
      </div>
    </section>
  );
};

export default LeadershipTeam;
