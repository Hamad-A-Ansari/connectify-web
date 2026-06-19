import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the Privacy Policy link with correct href", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: "Privacy Policy" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/privacy-policy");
  });

  it("renders the Terms of Service link with correct href", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: "Terms of Service" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/terms-of-service");
  });

  it("renders the Delete Account link with correct href", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: "Delete Account" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/delete-account");
  });

  it("renders the contact email link with correct mailto href", () => {
    render(<Footer />);
    const link = screen.getByRole("link", {
      name: "Send email to hamad.ansarif90@gmail.com",
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "mailto:hamad.ansarif90@gmail.com");
  });

  it("has aria-label on the email link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", {
      name: "Send email to hamad.ansarif90@gmail.com",
    });
    expect(link).toHaveAttribute(
      "aria-label",
      "Send email to hamad.ansarif90@gmail.com"
    );
  });
});
