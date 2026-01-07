import { Locator } from "@playwright/test";

export class PropertyTypeStep {
  readonly root: Locator;
  private readonly title: Locator;
  private readonly nextButton: Locator;
  readonly propertyErrorMessage: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-3");
    this.title = this.root.locator(".stepTitle__hdr");
    this.nextButton = this.root.locator("button[type='submit']");
    this.propertyErrorMessage = this.root.locator("[data-error-block]");
  }

  async select(label: string) {
    await this.root.locator("label", { hasText: label }).click();
  }

  async goNext() {
    await this.nextButton.click();
  }

  async selectAndContinue(label: string) {
    await this.select(label);
    await this.goNext();
  }
}
