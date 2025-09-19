import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Header from "@/components/header";
import { primaryNavigation } from "@/lib/navigation";

import type { ReactNode } from "react";

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

let mockPathname = "/";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

describe("Header", () => {
  beforeEach(() => {
    mockPathname = "/";
  });

  it("renders all primary navigation items", () => {
    render(<Header />);

    primaryNavigation.forEach((item) => {
      expect(screen.getAllByRole("link", { name: item.label })).not.toHaveLength(0);
    });
  });

  it("marks the current route as active", () => {
    mockPathname = "/security";
    render(<Header />);

    const navLinks = screen.getAllByRole("link", { name: /security/i });
    const activeLink = navLinks.find((link) => link.getAttribute("href") === "/security");

    expect(activeLink).toBeDefined();
    expect(activeLink).toHaveAttribute("aria-current", "page");
    expect(activeLink).toHaveClass("border-cranberry");
  });
});
