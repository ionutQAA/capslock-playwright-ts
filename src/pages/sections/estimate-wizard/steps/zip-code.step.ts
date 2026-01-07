import { Locator } from "@playwright/test";

export class ZipCodeStep {
  private readonly root: Locator;
  private readonly title: Locator;
  private readonly zipCodeInput: Locator;
  private readonly submitButton: Locator;
  readonly zipCodeErrorMessage: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-1");
    this.title = this.root.locator(".stepTitle__hdr");
    this.zipCodeInput = this.root.locator("[data-zip-code-input]");
    this.submitButton = this.root.locator("button[type='submit']");
    this.zipCodeErrorMessage = this.root.locator("[data-error-block]");
  }

  async submit(zip: string) {
    await this.zipCodeInput.fill(zip);
    await this.submitButton.click();
  }
}
