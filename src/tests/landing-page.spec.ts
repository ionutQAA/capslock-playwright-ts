import { test, expect } from "@playwright/test";
import { LandingPage } from "@pages/landing.page";

test.describe("Smoke", () => {
  test("Landing page loads successfully", async ({ page }) => {
    const jsErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        jsErrors.push(msg.text());
      }
    });

    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    const landingPage = new LandingPage(page);
    const response = await landingPage.goToLandingPage();

    expect(response?.status()).toBe(200);
    expect(jsErrors).toEqual([]);
    await expect(landingPage.locationLabel).toHaveText(
      "Available in Iași County"
    );
    await expect(landingPage.estimateFormPrimary.root).toBeVisible();
    await expect(landingPage.heroSection.video).toBeVisible();
    await expect(landingPage.heroSection.video).toHaveAttribute("src", /.+/);
  });
});
