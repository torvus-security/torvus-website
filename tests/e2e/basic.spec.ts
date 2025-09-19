import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y } from "@axe-core/playwright";

const WAITLIST_CTA = /Sign up for updates/i;

test.describe("marketing pages", () => {
  test("home page renders hero", async ({ page }) => {
    await page.goto("/");
    await injectAxe(page);

    await expect(page.getByRole("heading", { name: /Protect people/i })).toBeVisible();
    await expect(page.getByRole("link", { name: WAITLIST_CTA })).toBeVisible();
    await checkA11y(page, undefined, {
      detailedReport: false,
      detailedReportOptions: { html: false },
    });
  });

  test("waitlist form is present", async ({ page }) => {
    await page.goto("/waitlist");
    await expect(page.getByRole("heading", { name: /Private beta/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Sign up for updates/i })).toBeVisible();
  });
});
