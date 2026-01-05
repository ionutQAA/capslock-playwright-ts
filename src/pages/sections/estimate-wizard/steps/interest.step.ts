import { Page, Locator, expect } from "@playwright/test";

export class InterestStep {
  private readonly root: Locator;
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly nextButton: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-2");
    this.title = this.root.locator(".stepTitle__hdr");
    this.description = this.root.locator(".stepTitle__txt");
    this.nextButton = this.root.locator("button[type='submit']");
  }

  async expectToBeVisible() {
    await expect(this.root).toBeVisible();
  }

  async select(...labels: string[]) {
    for (const label of labels) {
      await this.root.locator("label", { hasText: label }).click();
    }
  }

  async next() {
    await this.nextButton.click();
  }
}
