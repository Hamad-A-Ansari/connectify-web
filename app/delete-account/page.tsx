import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account - Connectify",
  description:
    "Learn how to delete your Connectify account and what data gets removed.",
  openGraph: {
    title: "Delete Account - Connectify",
    description:
      "Learn how to delete your Connectify account and what data gets removed.",
    images: ["/og-image.svg"],
  },
};

export default function DeleteAccountPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Delete Account</h1>
        <p className="text-gray-300">
          We respect your right to control your data. If you wish to delete your
          Connectify account, you can do so directly within the app or by
          contacting us via email.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Delete via the App
            </h2>
            <p className="text-gray-300">
              Open the Connectify app → Profile → Settings → Delete Account.
              Follow the on-screen prompts to confirm the deletion of your
              account and all associated data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Delete via Email
            </h2>
            <p className="text-gray-300">
              If you are unable to delete your account through the app, you can
              request manual deletion by emailing us at{" "}
              <a
                href="mailto:hamadansari.dev@gmail.com"
                className="text-[#6C63FF] underline"
                aria-label="Send email to hamadansari.dev@gmail.com to request account deletion"
              >
                hamadansari.dev@gmail.com
              </a>
              . Please include the email address associated with your account so
              we can verify your identity and process the request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Gets Deleted
            </h2>
            <p className="text-gray-300 mb-2">
              When your account is deleted, the following data is permanently
              removed from our systems:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Profile information</li>
              <li>Posts</li>
              <li>Comments</li>
              <li>Likes</li>
              <li>Bookmarks</li>
              <li>Notifications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Deletion Timeline
            </h2>
            <p className="text-gray-300">
              Your data is deleted within 30 days of the request. During this
              period, your account will be deactivated and your content will no
              longer be visible to other users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
