import { Page, Locator } from "@playwright/test";

export class BathWallsSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly options: Locator;

  constructor(page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".wallOpt__item"),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.description = this.root.locator(".howBlock__txt");
    this.options = this.root.locator(".wallOpt__item");
  }
}
