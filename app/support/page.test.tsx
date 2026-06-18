import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SupportPage, { metadata } from "./page";
import { FAQ_ITEMS } from "./data";

describe("Support Page", () => {
  it("renders the contact email", () => {
    render(<SupportPage />);
    const emailLink = screen.getByRole("link", {
      name: /hamadansari\.dev@gmail\.com/,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:hamadansari.dev@gmail.com");
  });

  it("renders all 5 FAQ questions", () => {
    render(<SupportPage />);
    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it("renders all 5 FAQ answers", () => {
    render(<SupportPage />);
    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.answer)).toBeInTheDocument();
    });
  });

  it("exports page metadata with correct title and description", () => {
    expect(metadata.title).toBe("Support - Connectify");
    expect(metadata.description).toBe(
      "Get help with Connectify. Find answers to frequently asked questions or contact us directly."
    );
  });

  it("exports openGraph metadata", () => {
    const og = metadata.openGraph as {
      title: string;
      description: string;
      images: string[];
    };
    expect(og.title).toBe("Support - Connectify");
    expect(og.description).toBe(
      "Get help with Connectify. Find answers to frequently asked questions or contact us directly."
    );
    expect(og.images).toContain("/og-image.svg");
  });

  it("exports FAQ_ITEMS array with exactly 5 items", () => {
    expect(FAQ_ITEMS).toHaveLength(5);
  });
});
