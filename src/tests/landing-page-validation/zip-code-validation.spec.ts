import { test, expect } from "@playwright/test";
import { getValidZipCode } from "@utils/test-data/zip-code.data";
import { setupLandingPage } from "../helpers/landing-page.setup";
import { EstimateWizard } from "@pages/sections/estimate-wizard/estimate-wizard.section";

test.describe("Zip code validation", () => {
  let wizard: EstimateWizard;

  test.beforeEach(async ({ page }) => {
    wizard = (await setupLandingPage(page)).estimateFormPrimary;
  });

  const zipCodeScenarios = [
    {
      name: "empty",
      zipCode: "",
      zipCodeErrorMessage: "Enter your ZIP code.",
    },
    {
      name: "short",
      zipCode: "123",
      zipCodeErrorMessage: "Wrong ZIP code.",
    },
    {
      name: "long",
      zipCode: "123456",
      zipCodeErrorMessage: "Wrong ZIP code.",
    },
  ];

  zipCodeScenarios.forEach(({ name, zipCode, zipCodeErrorMessage }) => {
    test(`Rejects ${name} zip code`, async () => {
      const wizardZipCode = wizard.zipStep();

      await wizardZipCode.submit(zipCode);
      await expect(wizardZipCode.zipCodeErrorMessage).toHaveText(
        zipCodeErrorMessage
      );
    });
  });

  test("Out of area zip code", async () => {
    const wizardZipCode = wizard.zipStep();

    await wizardZipCode.submit("12345");
    await expect(wizard.sorryStep().root).toBeVisible();
  });

  test("Accepts valid zip code", async () => {
    const wizardZipCode = wizard.zipStep();

    const validZipCode = getValidZipCode();
    await wizardZipCode.submit(validZipCode);
    await expect(wizard.interestStep().root).toBeVisible();
  });
});
