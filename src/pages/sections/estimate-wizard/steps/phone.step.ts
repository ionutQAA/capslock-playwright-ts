import { Page, Locator } from "@playwright/test";

export class PhoneStep {
  private readonly root: Locator;
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly phoneInput: Locator;
  private readonly submitButton: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-5");
    this.title = this.root.locator(".stepTitle__hdr");
    this.description = this.root.locator(".stepTitle__txt");
    this.phoneInput = this.root.locator("[data-phone-input]");
    this.submitButton = this.root.locator("button[type='submit']");
  }

  async submit(phone: string) {
    await this.phoneInput.fill(phone);
    await this.submitButton.click();
  }
}
