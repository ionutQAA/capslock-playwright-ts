import { test, expect } from "@playwright/test";
import { LandingPage } from "@pages/landing.page";
import { ZipCodeGenerator } from "@utils/test-data/zip-code";

test.describe("Estimation Form", () => {
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.goToLandingPage();
  });

  test("landing page allows access to estimation form", async ({ page }) => {
    await expect(page).toHaveURL("/");
    await expect(landingPage.heroSection.root).toBeVisible();
    await expect(landingPage.fallingSection.root).toBeVisible();
    await expect(landingPage.generalViewSection.root).toBeVisible();
    await expect(landingPage.healthBenefitsSection.root).toBeVisible();
    await expect(landingPage.lifetimeSliderSection.root).toBeVisible();
    await expect(landingPage.warrantySection.root).toBeVisible();
    await expect(landingPage.estimateFormPrimary.root).toBeVisible();
    await expect(landingPage.walkInBenefitsSection.root).toBeVisible();
    await expect(landingPage.bathWallsSection.root).toBeVisible();
    await expect(landingPage.reviewsSection.root).toBeVisible();
    await expect(landingPage.estimateFormSecondary.root).toBeVisible();

    const zipStep = landingPage.estimateFormPrimary.zipStep();
    const zipCode = ZipCodeGenerator.generate();
    await zipStep.submit(zipCode);

    await landingPage.estimateFormPrimary.interestStep().expectToBeVisible();
  });
});
