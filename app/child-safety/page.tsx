import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safety Standards - Connectify",
  description:
    "Connectify's published safety standards against child sexual abuse and exploitation (CSAE).",
  openGraph: {
    title: "Child Safety Standards - Connectify",
    description:
      "Connectify's published safety standards against child sexual abuse and exploitation (CSAE).",
    images: ["/og-image.svg"],
  },
};

export default function ChildSafetyPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">
          Child Safety Standards
        </h1>
        <p className="text-gray-300">Last updated: June 2026</p>
        <p className="text-gray-300">
          Connectify is committed to the safety and protection of children. We
          have zero tolerance for child sexual abuse and exploitation (CSAE) on
          our platform. This page outlines our standards, prevention practices,
          and reporting mechanisms.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-300">
              Connectify strictly prohibits any content that sexually exploits or
              endangers children. This includes, but is not limited to, child
              sexual abuse material (CSAM), grooming behavior, sextortion, and
              any content that sexualizes minors. We actively work to detect,
              remove, and report such content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Prevention Measures
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Users must be 13 years of age or older to create an account
              </li>
              <li>
                Content moderation systems actively scan for and remove
                prohibited material
              </li>
              <li>
                Accounts found to be sharing CSAM or engaging in exploitative
                behavior are immediately suspended and reported to authorities
              </li>
              <li>
                We cooperate fully with law enforcement investigations related
                to child safety
              </li>
              <li>
                Regular review and updates of our safety policies and detection
                systems
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Reporting Child Safety Concerns
            </h2>
            <p className="text-gray-300 mb-4">
              Users can report child safety concerns directly within the
              Connectify app by tapping the three dots on any post or profile and
              selecting &quot;Report.&quot; Select the appropriate reason related
              to child safety when submitting your report.
            </p>
            <p className="text-gray-300">
              All reports related to child safety are prioritized and reviewed
              promptly. Where applicable, we report confirmed CSAM to the
              National Center for Missing &amp; Exploited Children (NCMEC) and
              cooperate with regional and national authorities as required by
              law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Compliance
            </h2>
            <p className="text-gray-300">
              Connectify complies with all relevant child safety laws and
              regulations. We report to regional and national authorities as
              required, and our practices align with industry standards for child
              safety.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact for Child Safety Inquiries
            </h2>
            <p className="text-gray-300">
              For questions or concerns regarding child safety on Connectify,
              please contact our designated point of contact at{" "}
              <a
                href="mailto:hamad.ansarif90@gmail.com"
                className="text-[#6C63FF] underline"
                aria-label="Send email to hamad.ansarif90@gmail.com for child safety inquiries"
              >
                hamad.ansarif90@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
