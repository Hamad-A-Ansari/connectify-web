import { Metadata } from "next";
import { FAQ_ITEMS } from "./data";

export const metadata: Metadata = {
  title: "Support - Connectify",
  description:
    "Get help with Connectify. Find answers to frequently asked questions or contact us directly.",
  openGraph: {
    title: "Support - Connectify",
    description:
      "Get help with Connectify. Find answers to frequently asked questions or contact us directly.",
    images: ["/og-image.svg"],
  },
};

export default function SupportPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Support</h1>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300">
            If you need help or have any questions, reach out to us at{" "}
            <a
              href="mailto:hamad.ansarif90@gmail.com"
              className="text-[#6C63FF] underline"
              aria-label="Send email to hamad.ansarif90@gmail.com for support"
            >
              hamad.ansarif90@gmail.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="bg-white/5 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
