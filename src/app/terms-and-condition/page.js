import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Barrownz Learning Academy",
  description: "Terms and conditions governing courses, admissions, and certificates at Barrownz Learning Academy.",
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <div className="bg-[#2E3192] text-white py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold">Terms and Conditions</h1>
          <p className="text-xs text-gray-400 mt-2">Barrownz Learning Academy Student Guidelines</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-gray-700 leading-relaxed">
          <p>
            Welcome to Barrownz Learning Academy. By registering for our courses, accessing our online portals, or attending physical lab sessions, you agree to comply with and be bound by the following terms.
          </p>

          <h2 className="text-base font-bold text-[#141b2f] pt-4">1. Enrollment and Course Fees</h2>
          <p>
            Enrollment is confirmed upon payment of the registration fee. Fees once paid are non-transferable and subject to the academy's official refund timeline disclosed at the time of admission.
          </p>

          <h2 className="text-base font-bold text-[#141b2f] pt-4">2. Code of Conduct and Lab Etiquette</h2>
          <p>
            Students are expected to maintain professional conduct across physical premises and digital class groups. Software licenses, project codebases, and proprietary learning materials provided by Barrownz are solely for educational purposes.
          </p>

          <h2 className="text-base font-bold text-[#141b2f] pt-4">3. Certification Criteria</h2>
          <p>
            Course completion certificates are issued only upon satisfactory completion of assigned lab assignments, regular attendance (minimum 75%), and successful presentation of the capstone project.
          </p>

          <h2 className="text-base font-bold text-[#141b2f] pt-4">4. Placement Support Terms</h2>
          <p>
            Placement assistance includes mock interviews, resume guidance, and scheduling company interviews. Students must maintain active attendance and meet benchmark technical assessments to qualify for enterprise placement drives.
          </p>
        </div>
      </section>
    </div>
  );
}
