import { Locator } from "@playwright/test";

export class SorryStep {
  readonly root: Locator;
  private readonly title: Locator;
  private readonly emailInput: Locator;
  private readonly submitButton: Locator;
  readonly emailErrorMessage: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-sorry");
    this.title = this.root.locator(".stepTitle__hdr");
    this.emailInput = this.root.locator("input[data-email-input]");
    this.submitButton = this.root.locator("button[type='submit']");
    this.emailErrorMessage = this.root.locator("[data-error-block]");
  }

  async submit(email: string) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }
}
