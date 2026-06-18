import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home, { metadata } from "./page";

describe("Home Page", () => {
  it("renders the Connectify heading", () => {
    render(<Home />);
    expect(screen.getByText("Connectify")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Home />);
    expect(
      screen.getByText("Share moments. Connect with people.")
    ).toBeInTheDocument();
  });

  it("renders the features section", () => {
    render(<Home />);
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Share Moments")).toBeInTheDocument();
    expect(screen.getByText("Real-time Notifications")).toBeInTheDocument();
    expect(screen.getByText("Discover People")).toBeInTheDocument();
    expect(screen.getByText("Safe Community")).toBeInTheDocument();
  });

  it("exports page metadata with correct title and description", () => {
    expect(metadata.title).toBe(
      "Connectify - Share moments. Connect with people."
    );
    expect(metadata.description).toBe(
      "A social platform to share photos, discover stories, and connect with friends"
    );
  });

  it("exports openGraph metadata", () => {
    const og = metadata.openGraph as {
      title: string;
      description: string;
      images: string[];
    };
    expect(og.title).toBe(
      "Connectify - Share moments. Connect with people."
    );
    expect(og.description).toBe(
      "A social platform to share photos, discover stories, and connect with friends"
    );
    expect(og.images).toContain("/og-image.svg");
  });
});
