import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the app name 'Connectify'", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Connectify");
  });

  it("renders the tagline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText("Share moments. Connect with people.")
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(
        "A social platform to share photos, discover stories, and connect with friends"
      )
    ).toBeInTheDocument();
  });

  it("contains a Play Store link", () => {
    render(<HeroSection />);
    const link = screen.getByLabelText("Download Connectify on Google Play");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://play.google.com/store/apps/details?id=com.hamadansari.connectify"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("contains the phone mockup", () => {
    render(<HeroSection />);
    // The phone mockup is rendered as an aria-hidden decorative div
    const { container } = render(<HeroSection />);
    const mockup = container.querySelector('[aria-hidden="true"]');
    expect(mockup).toBeInTheDocument();
  });
});
