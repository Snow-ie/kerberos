"use client";

import ServiceHero from "../../components/ServiceHero";

export default function TechnologyInfo() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <ServiceHero
        src="/image/techImg1.jpg"
        alt="Abstract technology background"
        ratio="21/9"
      />

      <main className="w-full container mx-auto px-4 py-12 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Kerberos Technologies.
          </h1>
          <p className="text-base font-medium text-indigo-600">
            Transforming Businesses Through Innovation
          </p>
        </header>

        {/* intro */}
        <p className="text-gray-700 leading-relaxed">
          Kerberos&nbsp;Technologies delivers cutting-edge digital solutions
          that enable organisations to adapt, scale, and lead in the age of
          disruption. Our deep technical expertise and agile delivery models
          support clients in cybersecurity, systems integration, and enterprise
          software development.
        </p>

        {/* focus areas */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Our Focus Areas Include
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Cybersecurity Solutions — </strong>
              Advanced security measures, threat intelligence, and proactive
              defence strategies to ensure business continuity and data
              integrity.
            </li>
            <li>
              <strong>Digital Transformation &amp; Automation — </strong>
              AI-driven and automated solutions that streamline operations,
              boost productivity, and unlock new efficiencies.
            </li>
            <li>
              <strong>Custom Software Development — </strong>
              Bespoke applications tailored to your unique business needs,
              delivering innovation and competitive advantage.
            </li>
            <li>
              <strong>Cloud Solutions &amp; Infrastructure — </strong>
              Scalable, secure cloud architecture that optimises performance
              while reducing IT costs.
            </li>
            <li>
              <strong>Database Architecture &amp; Administration — </strong>
              Designing, optimising, and managing efficient, scalable databases
              that evolve with your applications.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">Our Impact</h2>
          <p className="text-gray-700">
            We’ve delivered mission-critical deployments for federal security
            agencies and state institutions—including the Nigerian Police
            Force—providing robust, scalable solutions that ensure digital
            resilience.
          </p>
        </section>
      </main>
    </div>
  );
}
