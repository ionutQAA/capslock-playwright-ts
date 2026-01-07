import { Page } from "@playwright/test";
import { LandingPage } from "@pages/landing.page";

export async function setupLandingPage(page: Page): Promise<LandingPage> {
  const landingPage = new LandingPage(page);
  await landingPage.goToLandingPage();
  return landingPage;
}
