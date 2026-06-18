import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import AnimateOnScroll from "./AnimateOnScroll";

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  mockObserve.mockClear();
  mockUnobserve.mockClear();
  mockDisconnect.mockClear();

  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn((callback: IntersectionObserverCallback) => ({
      observe: mockObserve,
      unobserve: mockUnobserve,
      disconnect: mockDisconnect,
      root: null,
      rootMargin: "",
      thresholds: [0.1],
      takeRecords: () => [],
    }))
  );
});

describe("AnimateOnScroll", () => {
  it("renders its children", () => {
    render(
      <AnimateOnScroll>
        <p>Hello World</p>
      </AnimateOnScroll>
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("applies opacity-0 class initially", () => {
    const { container } = render(
      <AnimateOnScroll>
        <p>Content</p>
      </AnimateOnScroll>
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain("opacity-0");
    expect(wrapper.className).toContain("translate-y-4");
  });

  it("applies transition-all and duration-700 classes", () => {
    const { container } = render(
      <AnimateOnScroll>
        <p>Content</p>
      </AnimateOnScroll>
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain("transition-all");
    expect(wrapper.className).toContain("duration-700");
  });

  it("applies custom className", () => {
    const { container } = render(
      <AnimateOnScroll className="my-custom-class">
        <p>Content</p>
      </AnimateOnScroll>
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain("my-custom-class");
  });

  it("observes the element on mount", () => {
    render(
      <AnimateOnScroll>
        <p>Content</p>
      </AnimateOnScroll>
    );
    expect(mockObserve).toHaveBeenCalledTimes(1);
  });
});
