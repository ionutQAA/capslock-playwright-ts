import { test, expect } from "@playwright/test";
import { getValidZipCode } from "@utils/test-data/zip-code.data";
import { setupLandingPage } from "../helpers/landing-page.setup";
import { EstimateWizard } from "@pages/sections/estimate-wizard/estimate-wizard.section";

test.describe("Property type validation", () => {
  let wizard: EstimateWizard;

  test.beforeEach(async ({ page }) => {
    wizard = (await setupLandingPage(page)).estimateFormPrimary;

    await wizard.zipStep().submit(getValidZipCode());
    await wizard.interestStep().selectAndContinue("Safety");
  });

  test("No property selection", async () => {
    const wizardPropertyStep = wizard.propertyStep();

    await wizardPropertyStep.goNext();
    await expect(wizardPropertyStep.propertyErrorMessage).toHaveText(
      "Choose one of the variants."
    );
  });

  test("Single selection", async () => {
    const wizardPropertyStep = wizard.propertyStep();

    await wizardPropertyStep.selectAndContinue("Rental Property");

    await expect(wizard.contactStep().root).toBeVisible();
  });
});
