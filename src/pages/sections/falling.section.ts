import { Page, Locator } from "@playwright/test";

export class FallingSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly quote: Locator;
  readonly image: Locator;

  constructor(private readonly page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".falling"),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.description = this.root.locator(".blockTitle__txt");
    this.quote = this.root.locator(".quote__content");
    this.image = this.root.locator(".falling__img");
  }
}
