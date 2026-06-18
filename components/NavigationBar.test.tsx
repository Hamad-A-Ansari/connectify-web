import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NavigationBar from "./NavigationBar";

// Mock next/navigation
let mockPathname = "/";
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    className,
    onClick,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    onClick?: () => void;
  }) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ),
}));

describe("NavigationBar", () => {
  it("renders all 5 navigation links in desktop view", () => {
    render(<NavigationBar />);
    expect(screen.getAllByText("Home").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("Privacy Policy").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("Terms of Service").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("Delete Account").length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Support").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Connectify brand link", () => {
    render(<NavigationBar />);
    const brandLink = screen.getByText("Connectify");
    expect(brandLink).toBeInTheDocument();
    expect(brandLink.closest("a")).toHaveAttribute("href", "/");
  });

  it("highlights active link for home page", () => {
    mockPathname = "/";
    render(<NavigationBar />);
    const homeLinks = screen.getAllByText("Home");
    // Desktop nav link should have active styling
    const activeLink = homeLinks.find((link) =>
      link.className.includes("text-[#6C63FF]")
    );
    expect(activeLink).toBeDefined();
  });

  it("highlights active link for privacy policy page", () => {
    mockPathname = "/privacy-policy";
    render(<NavigationBar />);
    const links = screen.getAllByText("Privacy Policy");
    const activeLink = links.find((link) =>
      link.className.includes("text-[#6C63FF]")
    );
    expect(activeLink).toBeDefined();
  });

  it("has a mobile hamburger button with proper aria-label", () => {
    render(<NavigationBar />);
    const button = screen.getByLabelText("Toggle navigation menu");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<NavigationBar />);
    const button = screen.getByLabelText("Toggle navigation menu");

    // Menu should not be visible initially (links are in desktop nav but mobile menu is hidden)
    fireEvent.click(button);

    // After click, aria-expanded should be true
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Click again to close
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<NavigationBar />);
    const button = screen.getByLabelText("Toggle navigation menu");

    // Open mobile menu
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Click a mobile nav link - get all Support links, the last one will be in mobile menu
    const supportLinks = screen.getAllByText("Support");
    const mobileLink = supportLinks[supportLinks.length - 1];
    fireEvent.click(mobileLink);

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
