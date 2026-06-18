import PlayStoreBadge from "./PlayStoreBadge";
import PhoneMockup from "./PhoneMockup";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.hamadansari.connectify";

export default function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            <span className="text-accent">Connectify</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-300 font-medium">
            Share moments. Connect with people.
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
            A social platform to share photos, discover stories, and connect
            with friends
          </p>
          <div className="mt-8">
            <PlayStoreBadge href={PLAY_STORE_URL} />
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
