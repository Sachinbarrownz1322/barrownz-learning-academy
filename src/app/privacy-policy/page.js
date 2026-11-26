import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Barrownz Learning Academy",
  description: "Privacy policy and data governance practices at Barrownz Learning Academy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <div className="bg-[#2E3192] text-white py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
          <p className="text-xs text-gray-400 mt-2">Barrownz Learning Academy Data Privacy &amp; Governance</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-gray-700 leading-relaxed">
          <p>
            At Barrownz Learning Academy ("BLA", "we", "us", or "our"), accessible from https://barrownzlearning.com, one of our main priorities is the privacy of our visitors and students. This Privacy Policy document outlines the types of information collected and how it is protected.
          </p>

          <h2 className="text-base font-bold text-[#141b2f] pt-4">1. Information We Collect</h2>
          <p>
            When you register for training, request a brochure, or contact us through our website, we may collect personal details such as your name, email address, phone number, college name, and course preferences.
          </p>

          <h2 className="text-base font-bold text-[#141b2f] pt-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide, operate, and maintain course enrollment services</li>
            <li>To communicate batch timings, schedules, and curriculum updates</li>
            <li>To issue verifiable course completion certificates</li>
            <li>To facilitate placement drives with our partnered recruiting organizations</li>
          </ul>

          <h2 className="text-base font-bold text-[#141b2f] pt-4">3. Data Security</h2>
          <p>
            We implement stringent electronic safeguards to preserve the confidentiality of your information. We do not sell or rent personal information to external marketers.
          </p>

          <h2 className="text-base font-bold text-[#141b2f] pt-4">4. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, contact us at <strong>support@barrownz.com</strong> or call <strong>+91 9076760009</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
