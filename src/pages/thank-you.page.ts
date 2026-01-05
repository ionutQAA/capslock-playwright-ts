import { Page, Locator, expect } from "@playwright/test";

export class ThankYouPage {
  private readonly page: Page;
  readonly root: Locator;
  readonly title: Locator;
  readonly primaryMessage: Locator;
  readonly secondaryMessage: Locator;
  readonly logos: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = page.locator(".heroThankYou");
    this.title = this.root.locator(".heroThankYou__hdr");
    this.primaryMessage = this.root.locator(".heroThankYou__txt").first();
    this.secondaryMessage = this.root.locator(".heroThankYou__txt").nth(1);
    this.logos = this.root.locator(".logoAcc__img");
  }

  async expectLoaded() {
    await expect(this.title).toHaveText("Thank you!");
  }
}
