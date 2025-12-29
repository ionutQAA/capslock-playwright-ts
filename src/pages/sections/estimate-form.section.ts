import { Page, Locator } from "@playwright/test";

export class EstimateFormSection {
  readonly root: Locator;
  readonly activeStep: Locator;
  readonly nextButton: Locator;

  constructor(page: Page, instance: 1 | 2) {
    this.root = page.locator("section.section_form", {
      has: page.locator(`#form-container-${instance}`),
    });

    this.activeStep = this.root.locator(".steps:visible");
    this.nextButton = this.activeStep.locator("button[type='submit']");
  }

  zipCodeInput(): Locator {
    return this.activeStep.locator("[data-zip-code-input]");
  }

  interestOptions(): Locator {
    return this.activeStep.locator("input[type='checkbox']");
  }

  propertyOptions(): Locator {
    return this.activeStep.locator("input[type='radio']");
  }

  nameInput(): Locator {
    return this.activeStep.locator("[data-name-input]");
  }

  emailInput(): Locator {
    return this.activeStep.locator("input[type='email']");
  }

  phoneInput(): Locator {
    return this.activeStep.locator("[data-phone-input]");
  }

  async next() {
    await this.nextButton.click();
  }
}
