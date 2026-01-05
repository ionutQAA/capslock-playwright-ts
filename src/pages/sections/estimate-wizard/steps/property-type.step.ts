import { Locator, expect } from "@playwright/test";

export class PropertyTypeStep {
  private readonly root: Locator;
  private readonly title: Locator;
  private readonly nextButton: Locator;
  private readonly errorMessage: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-3");
    this.title = this.root.locator(".stepTitle__hdr");
    this.nextButton = this.root.locator("button[type='submit']");
    this.errorMessage = this.root.locator("[data-error-block]");
  }

  async select(label: string) {
    await this.root.locator("label", { hasText: label }).click();
  }

  async next() {
    await this.nextButton.click();
  }
}
