import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Connectify - Share moments. Connect with people.",
  description:
    "A social platform to share photos, discover stories, and connect with friends",
  openGraph: {
    title: "Connectify - Share moments. Connect with people.",
    description:
      "A social platform to share photos, discover stories, and connect with friends",
    images: ["/og-image.svg"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <AnimateOnScroll>
        <HeroSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FeaturesSection />
      </AnimateOnScroll>
    </div>
  );
}
