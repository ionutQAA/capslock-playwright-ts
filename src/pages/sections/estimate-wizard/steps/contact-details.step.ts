import { Locator } from "@playwright/test";

export class ContactDetailsStep {
  readonly root: Locator;
  private readonly nameInput: Locator;
  readonly emailInput: Locator;
  private readonly goToEstimateButton: Locator;
  readonly nameErrorMessage: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-4");

    this.nameInput = this.root.locator("[data-name-input]");
    this.emailInput = this.root.locator("input[type='email']");
    this.goToEstimateButton = this.root.locator("button[type='submit']");
    this.nameErrorMessage = this.nameInput
      .locator("xpath=ancestor::*[@data-input-wrapper]")
      .locator("[data-error-block]");
  }

  async submit(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.goToEstimateButton.click();
  }
}
