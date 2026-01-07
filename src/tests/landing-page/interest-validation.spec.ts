import { test, expect } from "@playwright/test";
import { getValidZipCode } from "@utils/test-data/zip-code.data";
import { setupLandingPage } from "../helpers/landing-page.setup";
import { EstimateWizard } from "@pages/sections/estimate-wizard/estimate-wizard.section";

test.describe("Interest validation", () => {
  let wizard: EstimateWizard;

  test.beforeEach(async ({ page }) => {
    wizard = (await setupLandingPage(page)).estimateFormPrimary;

    const wizardZipCode = wizard.zipStep();
    await wizardZipCode.submit(getValidZipCode());
  });

  test("No interest selections", async () => {
    const wizardInterestStep = wizard.interestStep();

    await wizardInterestStep.goNext();
    await expect(wizardInterestStep.interestErrorMessage).toHaveText(
      "Please select one option to continue."
    );
  });

  const interestScenarios = [
    {
      name: "no selection",
      selections: [],
    },
    {
      name: "single selection",
      selections: ["Safety"],
    },
    {
      name: "multiple selection",
      selections: ["Safety", "Other"],
    },
    {
      name: "all selection",
      selections: ["Independence", "Safety", "Therapy", "Other"],
    },
  ];

  interestScenarios.forEach(({ name, selections }) => {
    test(`Interest validation ${name}`, async () => {
      const wizardInterestStep = wizard.interestStep();

      if (selections.length > 0) {
        await wizardInterestStep.selectAndContinue(...selections);
      } else {
        await wizardInterestStep.goNext();
      }

      await expect(wizard.propertyStep().root).toBeVisible();
    });
  });
});
