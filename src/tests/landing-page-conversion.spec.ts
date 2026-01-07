import { test, expect } from "@playwright/test";
import { LandingPage } from "@pages/landing.page";
import { getValidConversionData } from "@utils/test-data/conversion.data";
import { ThankYouPage } from "@pages/thank-you.page";

test.describe("Conversion", () => {
  test("Primary conversion flow", async ({ page }) => {
    const landingPage = new LandingPage(page);
    await landingPage.goToLandingPage();
    const wizard = landingPage.estimateFormPrimary;

    const conversionData = getValidConversionData();
    await wizard.zipStep().submit(conversionData.zipCode);
    await wizard.interestStep().selectAndContinue("Safety");
    await wizard.propertyStep().selectAndContinue("Rental Property");
    await wizard
      .contactStep()
      .submit(conversionData.fullName, conversionData.email);
    await wizard.phoneStep().submit(conversionData.phoneNumber);

    const thankYouPage = new ThankYouPage(page);
    await expect(thankYouPage.title).toHaveText("Thank you!");
  });
});
