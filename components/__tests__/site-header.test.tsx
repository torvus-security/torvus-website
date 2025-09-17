import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import SiteHeader from "@/components/site-header";

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

describe("SiteHeader global menu", () => {
  beforeEach(() => {
    mockPathname = "/";
  });

  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("opens and closes the overlay", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);

    expect(screen.getByRole("dialog", { name: /global navigation/i })).toBeVisible();

    const closeButton = screen.getByRole("button", { name: /^close$/i });
    await user.click(closeButton);

    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: /global navigation/i })).not.toBeInTheDocument(),
    );
  });

  it("cycles focus within the overlay", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);

    const homeLink = screen.getByRole("link", { name: /^home$/i });
    expect(homeLink).toHaveFocus();

    await user.tab({ shift: true });
    expect(screen.getByRole("button", { name: /^close$/i })).toHaveFocus();

    await user.tab();
    expect(homeLink).toHaveFocus();
  });

  it("closes when escape is pressed", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);

    expect(screen.getByRole("dialog", { name: /global navigation/i })).toBeVisible();

    await user.keyboard("{Escape}");

    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: /global navigation/i })).not.toBeInTheDocument(),
    );
    expect(menuButton).toHaveFocus();
  });

  it("closes on route change", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);
    expect(screen.getByRole("dialog", { name: /global navigation/i })).toBeVisible();

    mockPathname = "/features";
    rerender(<SiteHeader />);

    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: /global navigation/i })).not.toBeInTheDocument(),
    );
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
