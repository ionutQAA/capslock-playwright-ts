import { Page, Locator } from "@playwright/test";

export class HealthBenefitsSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly benefitBlocks: Locator;

  constructor(private readonly page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".healthBlock"),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.description = this.root.locator(".blockTitle__txt");
    this.benefitBlocks = this.root.locator(".healthBlock");
  }
}
