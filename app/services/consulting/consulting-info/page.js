"use client";

import ServiceHero from "../../components/ServiceHero";

export default function ConsultingInfo() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <ServiceHero
        src="/image/consultingImg4.jpg"
        alt="Analytics dashboard on tablet"
        ratio="21/9"
      />

      <main className="w-full container mx-auto px-4 py-12 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Kerberos Consulting.
          </h1>
          <p className="text-base font-medium text-indigo-600">
            Empowering Growth Through Strategic Insight
          </p>
        </header>

        <p className="text-gray-700 leading-relaxed">
          Kerberos&nbsp;Consulting partners with organisations to unlock their
          full potential by aligning vision with data-driven, actionable
          strategies. Through rigorous market intelligence, performance
          frameworks, and stakeholder-focused advisory, we help clients build
          resilient systems and deliver long-term impact.
        </p>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Our Services Include
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Business Strategy Consulting — </strong>
              Tailored planning, market analysis, and competitive positioning to
              chart long-term success.
            </li>
            <li>
              <strong>Risk Management &amp; Regulatory Advisory — </strong>
              Cybersecurity to enterprise risk: protecting assets, ensuring
              compliance, and fostering organisational trust.
            </li>
            <li>
              <strong>Operations &amp; Performance Optimisation — </strong>
              Lean processes, advanced analytics, and improvement initiatives
              that drive measurable results.
            </li>
            <li>
              <strong>Project Construction — </strong>
              End-to-end expertise: project management, cost control, risk
              mitigation, and quality assurance.
            </li>
          </ul>

          <p className="text-gray-700">
            We’re committed to delivering tailored solutions that address your
            specific needs and generate measurable impact.
          </p>
        </section>
      </main>
    </div>
  );
}
