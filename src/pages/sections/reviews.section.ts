import { Page, Locator } from "@playwright/test";

export class ReviewsSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly visibleReviews: Locator;
  readonly showMoreButton: Locator;

  constructor(page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".review"),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.visibleReviews = this.root.locator(".reviewWrap .review");
    this.showMoreButton = this.root.locator(".moreless");
  }
}
