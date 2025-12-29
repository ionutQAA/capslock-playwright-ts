import { Page, Locator } from "@playwright/test";

export class BathBenefitsSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly benefitBlocks: Locator;

  constructor(page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".howBlock"),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.benefitBlocks = this.root.locator(".howBlock");
  }
}
