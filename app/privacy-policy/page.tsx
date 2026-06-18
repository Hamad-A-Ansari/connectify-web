import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Connectify",
  description:
    "Learn how Connectify collects, uses, and protects your personal data.",
  openGraph: {
    title: "Privacy Policy - Connectify",
    description:
      "Learn how Connectify collects, uses, and protects your personal data.",
    images: ["/og-image.svg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="text-gray-300">
          Last updated: June 2026
        </p>
        <p className="text-gray-300">
          Connectify (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, and safeguard your information when you use our mobile
          application.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-300 mb-2">
              We collect the following types of information when you use
              Connectify:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Profile photo</li>
              <li>Posts and images you share</li>
              <li>Device information</li>
              <li>Push notification tokens</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How We Use Your Data
            </h2>
            <p className="text-gray-300">
              We use your information to provide and improve the Connectify
              experience, including displaying your profile to other users,
              delivering push notifications, analyzing app performance, and
              ensuring the safety of our community.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-300 mb-2">
              We use the following third-party services to operate Connectify:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                <strong>Clerk</strong> — for authentication and user account
                management
              </li>
              <li>
                <strong>Convex</strong> — for data storage and real-time backend
                services
              </li>
              <li>
                <strong>Sentry</strong> — for crash reporting and error tracking
              </li>
              <li>
                <strong>Expo</strong> — for push notifications delivery
              </li>
            </ul>
            <p className="text-gray-300 mt-2">
              These services may collect and process data in accordance with
              their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Sharing
            </h2>
            <p className="text-gray-300">
              We do not sell your personal data to third parties. Your
              information is only shared with the third-party services listed
              above as necessary to operate the app.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Deletion
            </h2>
            <p className="text-gray-300">
              You can request deletion of your data at any time. You may delete
              your account directly within the app or by contacting us via email.
              Upon deletion, all your personal data will be permanently removed
              from our systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Retention
            </h2>
            <p className="text-gray-300">
              Your data is retained until you delete your account. Once your
              account is deleted, your data is permanently removed from our
              systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-300">
              Connectify is not directed at children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If we become aware that a child under 13 has provided us with
              personal data, we will take steps to delete that information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify
              users of any significant changes through the app or via email. Your
              continued use of Connectify after changes are posted constitutes
              acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy or wish to make
              a privacy inquiry, please contact us at{" "}
              <a
                href="mailto:hamadansari.dev@gmail.com"
                className="text-[#6C63FF] underline"
                aria-label="Send email to hamadansari.dev@gmail.com for privacy inquiries"
              >
                hamadansari.dev@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
