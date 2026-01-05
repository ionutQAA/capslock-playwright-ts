import { Page, Locator } from "@playwright/test";

export class ContactDetailsStep {
  private readonly root: Locator;
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly goToEstimateButton: Locator;
  private readonly errorMessage: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-4");

    this.nameInput = this.root.locator("[data-name-input]");
    this.emailInput = this.root.locator("input[type='email']");
    this.goToEstimateButton = this.root.locator("button[type='submit']");
    this.errorMessage = this.root.locator("[data-error-block]");
  }

  async submit(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.goToEstimateButton.click();
  }
}
