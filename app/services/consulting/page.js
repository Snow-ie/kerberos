"use client";

import ServiceHero from "@/app/services/components/ServiceHero";

export default function ConsultingIntro() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* hero banner */}
      <ServiceHero
        src="/image/HeroImg1.jpeg"
        alt="Analytics dashboard on tablet"
        ratio="21/9"
      />

      {/* main body */}
      <main className="w-full max-w-3xl mx-auto px-4 py-12 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Kerberos: Pioneering Excellence Across Industries
          </h1>
          <p className="text-base font-medium text-indigo-600">
            Strategic Consulting • Technology Solutions • Energy Advisory
          </p>
        </header>

        <p className="text-gray-700 leading-relaxed">
          At&nbsp;Kerberos, we empower businesses to grow, optimise operations,
          and navigate complex challenges with world-class expertise. Our
          diversified services—strategic consulting, technological solutions,
          and energy advisory—keep clients ahead in an ever-evolving landscape.
        </p>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Our Expertise</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Business Strategy &amp; Growth —</strong> Market
              intelligence, competitive positioning, and roadmap execution.
            </li>
            <li>
              <strong>Technology Transformation —</strong> Digital acceleration,
              systems integration, and bespoke software delivery.
            </li>
            <li>
              <strong>Energy &amp; Sustainability —</strong> Advisory services
              driving efficiency and responsible growth.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Why Kerberos?</h2>
          <p className="text-gray-700">
            We blend data-driven insight with deep industry know-how to deliver
            tailored solutions and measurable impact—helping organisations
            thrive today and lead tomorrow.
          </p>
        </section>
      </main>
    </div>
  );
}
