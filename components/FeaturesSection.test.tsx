import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FeaturesSection, { FEATURES } from "./FeaturesSection";

describe("FeaturesSection", () => {
  it("renders the section heading 'Features'", () => {
    render(<FeaturesSection />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Features");
  });

  it("renders all 4 feature titles", () => {
    render(<FeaturesSection />);
    for (const feature of FEATURES) {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
    }
  });

  it("renders all 4 feature descriptions", () => {
    render(<FeaturesSection />);
    for (const feature of FEATURES) {
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    }
  });
});
