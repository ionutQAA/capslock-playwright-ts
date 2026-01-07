import { Locator } from "@playwright/test";

export class InterestStep {
  readonly root: Locator;
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly nextButton: Locator;
  readonly interestErrorMessage: Locator;

  constructor(container: Locator) {
    this.root = container.locator(".steps.step-2");
    this.title = this.root.locator(".stepTitle__hdr");
    this.description = this.root.locator(".stepTitle__txt");
    this.nextButton = this.root.locator("button[type='submit']");
    this.interestErrorMessage = this.root.locator("[data-error-block]");
  }

  async select(...labels: string[]) {
    for (const label of labels) {
      await this.root.locator("label", { hasText: label }).click();
    }
  }

  async goNext() {
    await this.nextButton.click();
  }

  async selectAndContinue(...labels: string[]) {
    await this.select(...labels);
    await this.goNext();
  }
}
