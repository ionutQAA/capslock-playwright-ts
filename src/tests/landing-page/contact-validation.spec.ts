import { test, expect } from "@playwright/test";
import { setupLandingPage } from "../helpers/landing-page.setup";
import { EstimateWizard } from "@pages/sections/estimate-wizard/estimate-wizard.section";
import { getValidFullName } from "@utils/test-data/full-name.data";
import { getValidEmail } from "@utils/test-data/email.data";
import { getValidZipCode } from "@utils/test-data/zip-code.data";

test.describe("Contact validation", () => {
  let wizard: EstimateWizard;

  test.beforeEach(async ({ page }) => {
    wizard = (await setupLandingPage(page)).estimateFormPrimary;

    await wizard.zipStep().submit(getValidZipCode());
    await wizard.interestStep().selectAndContinue("Safety");
    await wizard.propertyStep().selectAndContinue("Rental Property");
  });

  const emailScenarios = [
    {
      name: "empty",
      email: "",
    },
    {
      name: "invalid",
      email: "test.com",
    },
  ];

  emailScenarios.forEach(({ name, email }) => {
    test(`Rejects ${name} email`, async () => {
      const wizardContactStep = wizard.contactStep();

      await wizardContactStep.submit(getValidFullName(), email);

      await expect(wizardContactStep.emailInput).toHaveJSProperty(
        "validity.valid",
        false
      );
    });
  });

  const nameScenarios = [
    {
      name: "empty",
      fullName: "",
      nameErrorMessage: "Please enter your name.",
    },
    {
      name: "too short",
      fullName: "a",
      nameErrorMessage:
        "This value is too short. Your name should have at least 3 characters or more.",
    },
    {
      name: "only first",
      fullName: "asd",
      nameErrorMessage:
        "Your full name should contain both first and last name.",
    },
  ];

  nameScenarios.forEach(({ name, fullName, nameErrorMessage }) => {
    test(`Rejects ${name} name`, async () => {
      const wizardContactStep = wizard.contactStep();

      await wizardContactStep.submit(fullName, getValidEmail());

      await expect(wizardContactStep.nameErrorMessage).toHaveText(
        nameErrorMessage
      );
    });
  });

  test("Accepts valid full name and email", async () => {
    const wizardContactStep = wizard.contactStep();

    await wizardContactStep.submit(getValidFullName(), getValidEmail());
    await expect(wizard.phoneStep().root).toBeVisible();
  });
});
