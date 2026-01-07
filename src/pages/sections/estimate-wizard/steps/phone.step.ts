import { Locator } from "@playwright/test";

export class PhoneStep {
  readonly root: Locator;
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly phoneInput: Locator;
  private readonly submitButton: Locator;
  readonly phoneErrorMessage: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-5");
    this.title = this.root.locator(".stepTitle__hdr");
    this.description = this.root.locator(".stepTitle__txt");
    this.phoneInput = this.root.locator("[data-phone-input]");
    this.submitButton = this.root.locator("button[type='submit']");
    this.phoneErrorMessage = this.phoneInput
      .locator("xpath=ancestor::*[@data-input-wrapper]")
      .locator("[data-error-block]");
  }

  async submit(phone: string) {
    await this.phoneInput.fill(phone);
    await this.submitButton.click();
  }
}
