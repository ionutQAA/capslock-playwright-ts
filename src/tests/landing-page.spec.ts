import { test, expect } from "@playwright/test";
import { LandingPage } from "@pages/landing.page";

test("landing page loads successfully", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.goToLandingPage();
  await expect(page).toHaveURL("/");
});
