import { Page, Locator } from "@playwright/test";

export class WarrantySection {
  readonly root: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly badgeImage: Locator;

  constructor(private readonly page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".warranty"),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.description = this.root.locator(".blockTitle__txt");
    this.badgeImage = this.root.locator(".warranty__badge");
  }
}
