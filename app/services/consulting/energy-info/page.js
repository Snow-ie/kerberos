"use client";

import ServiceHero from "../../components/ServiceHero";
import NextButton from "../../components/NextButton";

export default function EnergyInfo() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero
        src="/image/energyImg4.jpg"
        alt="Energy landscape"
        ratio="21/9"
      />

      <main className="w-full max-w-3xl mx-auto px-4 py-12 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Kerberos Energy Services&nbsp;Limited.
          </h1>
          <p className="text-base font-medium text-indigo-600">
            Driving Sustainability &amp; Innovation in Energy
          </p>
        </header>

        <p className="text-gray-700 leading-relaxed">
          Kerberos&nbsp;Energy&nbsp;Services delivers strategic advisory,
          technical solutions, and operational efficiency consulting for the
          energy, oil&nbsp;&amp;&nbsp;gas, and renewables sectors. We help
          clients transition to sustainable energy models, optimize legacy
          systems, and uncover investment opportunities in Africa’s energy
          landscape.
        </p>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Our Specialties Include
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Oil &amp; Gas Value‑Chain Consulting&nbsp;—</strong> From
              upstream exploration to downstream distribution, we optimise
              operations, improve efficiency, and enhance profitability.
            </li>
            <li>
              <strong>Renewable Energy Strategy&nbsp;—</strong> Market analysis,
              technology assessment, project development, and investment
              guidance to integrate renewables into existing portfolios.
            </li>
            <li>
              <strong>
                Energy Efficiency &amp; Process Optimisation&nbsp;—
              </strong>{" "}
              Cut costs, reduce environmental impact, and boost performance via
              innovative technologies and best practices.
            </li>
            <li>
              <strong>Regulatory Compliance &amp; ESG Advisory&nbsp;—</strong>{" "}
              Navigate regulations, mitigate risk, and elevate ESG performance
              for a responsible energy business.
            </li>
            <li>
              <strong>Infrastructure Feasibility Studies&nbsp;—</strong>{" "}
              Comprehensive evaluations for pipelines, storage, and renewable
              installations—ensuring every project is viable from day one.
            </li>
          </ul>
        </section>

        {/* impact */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Our Impact</h2>
          <p className="text-gray-700">
            Kerberos Energy Services provides the expert guidance and innovative
            solutions required to thrive in the evolving energy sector.
          </p>
        </section>
      </main>

      {/* CTA */}
      <div className="mt-auto w-full max-w-3xl mx-auto px-4 pb-12 flex justify-end">
        <NextButton href="/services/consulting" />
      </div>
    </div>
  );
}
