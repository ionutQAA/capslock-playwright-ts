import { test, expect } from "@playwright/test";
import { setupLandingPage } from "../helpers/landing-page.setup";
import { EstimateWizard } from "@pages/sections/estimate-wizard/estimate-wizard.section";
import { getValidFullName } from "@utils/test-data/full-name.data";
import { getValidEmail } from "@utils/test-data/email.data";
import { getValidZipCode } from "@utils/test-data/zip-code.data";
import { getValidPhoneNumber } from "@utils/test-data/phone.data";
import { ThankYouPage } from "@pages/thank-you.page";

test.describe("Phone number validation", () => {
  let wizard: EstimateWizard;

  test.beforeEach(async ({ page }) => {
    wizard = (await setupLandingPage(page)).estimateFormPrimary;

    await wizard.zipStep().submit(getValidZipCode());
    await wizard.interestStep().selectAndContinue("Safety");
    await wizard.propertyStep().selectAndContinue("Rental Property");
    await wizard.contactStep().submit(getValidFullName(), getValidEmail());
  });

  const phoneScenarios = [
    {
      name: "empty",
      phone: "",
      phoneErrorMessage: "Enter your phone number.",
    },
    {
      name: "invalid",
      phone: "2",
      phoneErrorMessage: "Wrong phone number.",
    },
  ];

  phoneScenarios.forEach(({ name, phone, phoneErrorMessage }) => {
    test(`Rejects ${name} phone`, async () => {
      const wizardPhoneStep = wizard.phoneStep();

      await wizardPhoneStep.submit(phone);

      await expect(wizardPhoneStep.phoneErrorMessage).toHaveText(
        phoneErrorMessage
      );
    });
  });

  test("Accepts valid phone number", async ({ page }) => {
    const wizardPhoneStep = wizard.phoneStep();

    await wizardPhoneStep.submit(getValidPhoneNumber());
    const thankYouPage = new ThankYouPage(page);
    await expect(thankYouPage.title).toHaveText("Thank you!");
  });
});
