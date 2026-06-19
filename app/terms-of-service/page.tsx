import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Connectify",
  description:
    "Read the terms and conditions for using the Connectify social media app.",
  openGraph: {
    title: "Terms of Service - Connectify",
    description:
      "Read the terms and conditions for using the Connectify social media app.",
    images: ["/og-image.svg"],
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        <p className="text-gray-300">
          Last updated: June 2026
        </p>
        <p className="text-gray-300">
          Welcome to Connectify. By using our app, you agree to these Terms of
          Service. Please read them carefully before using Connectify.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Eligibility
            </h2>
            <p className="text-gray-300">
              You must be 15 years of age or older to use Connectify. By
              creating an account, you confirm that you meet this age
              requirement. If we learn that a user is under 15, we will
              terminate their account immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              User Responsibilities
            </h2>
            <p className="text-gray-300">
              You are responsible for all content you post on Connectify. This
              includes photos, comments, messages, and any other material you
              share through the app. You agree to use the platform in a lawful
              and respectful manner.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Prohibited Content
            </h2>
            <p className="text-gray-300 mb-2">
              The following types of content are strictly prohibited on
              Connectify:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Hate speech or content promoting discrimination</li>
              <li>Nudity or sexually explicit material</li>
              <li>Violence or graphic content</li>
              <li>Harassment, bullying, or threats</li>
              <li>Illegal activity or content promoting illegal behavior</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Content Removal &amp; Account Suspension
            </h2>
            <p className="text-gray-300">
              Connectify reserves the right to remove any content that violates
              these Terms of Service or our community guidelines. We may also
              suspend or permanently terminate accounts that repeatedly or
              severely violate our policies. Decisions regarding content removal
              and account suspension are made at our sole discretion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Content Moderation &amp; Reporting
            </h2>
            <p className="text-gray-300">
              Connectify employs a combination of automated systems and human
              review to moderate content on the platform. Users can report
              inappropriate content or accounts directly through the app using
              the report feature available on posts and profiles. All reports
              are reviewed, and appropriate action is taken in accordance with
              these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-300">
              You retain ownership of all content you post on Connectify.
              However, by posting content, you grant Connectify a non-exclusive,
              royalty-free, worldwide license to use, display, reproduce, and
              distribute your content within the app and for promotional
              purposes. This license ends when you delete your content or
              account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-300">
              Connectify is provided &quot;as is&quot; without warranties of any
              kind, either express or implied. To the fullest extent permitted
              by law, Connectify shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any
              loss of profits or revenues, whether incurred directly or
              indirectly, arising from your use of the app.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-300">
              We may update these Terms of Service from time to time. When we
              make changes, we will notify users through the app or via email.
              Your continued use of Connectify after the updated terms are
              posted constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300">
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:hamad.ansarif90@gmail.com"
                className="text-[#6C63FF] underline"
                aria-label="Send email to hamad.ansarif90@gmail.com for terms of service inquiries"
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
